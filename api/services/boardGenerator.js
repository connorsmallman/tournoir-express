import _ from 'lodash';
import Group from '../classes/group';
import Column from '../classes/column';
import isEven from '../helpers/evens';

function createEmptyPlayers(players) {
  if (players.length === 1) {
    players.push({ playerName: '', isVacant: true });
    return createEmptyPlayers(players);
  } else if (players.length !== 2 && players.length % 4) {
    players.push({ playerName: '', isVacant: true });
    return createEmptyPlayers(players);
  } else {
    return players;
  }
}

function shufflePlayers(players) {
  return _.shuffle(players);
}

function reorderPlayers(players) {
  let emptyPlayers = _.where(players, { isVacant: true });
  let nonEmptyPlayers = _.filter(players, player => _.isUndefined(player.isVacant));
  return _.filter(_.flatten(_.zip(nonEmptyPlayers, emptyPlayers)), player => _.isObject(player));
}

function groupPlayers(players) {
  return _.chunk(players, 2);
}

function createColumns(playerGroups) {
  let colLength = (Math.log(playerGroups.length) / Math.log(2) + 1);
  let cols = _.map(_.range(colLength), x => new Column());
  let groups = _.map(playerGroups, players => new Group({ players }));
  return _.forEach(cols, (col, i, cols) => {
    if (!i) {
      //add groups to first column
      _.forEach(groups, group => col.addGroup(group));
    } else if (i === cols.length - 1){
      //is last col add one group
      col.addGroup(new Group());
    } else {
      //add empty groups to next column
      //half the number of the previous column
      _.forEach(_.range(cols[i - 1].groups.length / 2), x => col.addGroup(new Group()));
    }
  });
}

function setPositions(cols) {
  return _.forEach(cols, (col, i) => {
    col.setPosition(i + 1);
    _.forEach(col.groups, (group, j) => {
      group
        .setPosition({ col: i + 1, group: j + 1 })
        .setChildrenPosition();
      //if last column don't set next position;
      if (i === (cols.length - 1)) return false;
      group
        .setNextPosition()
        .setChildrenNextPosition();
    });
  });
}

function getByes(groups) {
  let wrapped = _(groups);
  return wrapped
    .filter(group => _.some(_.pluck(group.players, 'isVacant'))) //filter groups with empty players
    .pluck('players') // pluck players from group
    .flatten()
    .where({ isVacant: false }) // only get non empty players
    .value();
}

function createByes(cols) {
  let byes = getByes(cols[0].groups);
  _.forEach(byes, bye => {
    let group = cols[bye.nextPosition.col - 1].groups[bye.nextPosition.group - 1];
    group
      .addPlayer(bye)
      .setChildrenPosition()
      .setChildrenNextPosition();
  });
  return cols;
}

let board = _.flow(shufflePlayers, createEmptyPlayers, reorderPlayers, groupPlayers, createColumns, setPositions, createByes);

export default {
	createBoard(players) {
	    return board(players);
	}
};