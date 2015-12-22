import _ from 'lodash';
import Group from '../classes/group';
import Column from '../classes/column';
import isEven from '../helpers/evens';

function createEmptyPlayers(players) {
  if (players.length === 1) {
    players.push({ playerName: '', isEmpty: true });
    return createEmptyPlayers(players);
  } else if (players.length !== 2 && players.length % 4) {
    players.push({ playerName: '', isEmpty: true });
    return createEmptyPlayers(players);
  } else {
    return players;
  }
}

function shufflePlayers(players) {
  return _.shuffle(players);
}

function reorderPlayers(players) {
  let emptyPlayers = _.takeRightWhile(players, player => player.isEmpty);
  let nonEmptyPlayers = _.takeWhile(players, player => (player.isEmpty === undefined));
  let newPlayersArray = [];
  let len = (emptyPlayers.length + nonEmptyPlayers.length);
  for (let i = 0; i < len; i++) {    
    if (nonEmptyPlayers[i] !== undefined) newPlayersArray.push(nonEmptyPlayers[i]);
    if (emptyPlayers[i] !== undefined) newPlayersArray.push(emptyPlayers[i]);
  }
  return newPlayersArray;
}

function groupPlayers(players) {
  return _.chunk(players, 2);
}

function createColumns(playerGroups) {
  let cols = [];
  //Add playerGroups to first column;
  let groups = _.map(playerGroups, players => new Group({ players: players }));
  cols.push(new Column({ groups }));
  // create empty groups for rest of columns
  for (let i = (playerGroups.length - 1); i > 0; i--) {
    if (i === 1) break;
    let groups = [];
    let len = i / 2;
    for (let j = 0; j < len; j++) {
      groups.push(new Group());
    }
    cols.push(new Column({ groups }));
  }
  return cols;
}

function setPositions(cols) {
  for (let i = 0; i < cols.length; i++) {
    cols[i].setPosition(i + 1);
    for (let j = 0; j < cols[i].groups.length; j++) {
      cols[i].groups[j].setPosition({ col: i + 1, group: j + 1 });
      cols[i].groups[j].setChildrenPosition();
      if (i === (cols.length - 1)) break; //if last group don't set next position.
      cols[i].groups[j].setNextPosition();
      cols[i].groups[j].setChildrenNextPosition();
    }
  }
  return cols;
}

function getByes(groups) {
  let byes = [];
  _.forEach(groups, group => {
    let emptyIndex = _.findIndex(group.players, player => player.isEmpty);
    let nonEmptyIndex = _.findIndex(group.players, player => !player.isEmpty);
    if (emptyIndex !== -1 && nonEmptyIndex !== -1) bye.push(group.players[nonEmptyIndex]);
  });
  return byes;
}

function createByes(cols) {
  let byes = getByes(cols[0].groups);
  _.forEach(byes, bye => {
    cols[bye.nextPosition.col - 1].groups[bye.nextPosition.group - 1].addPlayer(bye);
    cols[bye.nextPosition.col - 1].groups[bye.nextPosition.group - 1].setChildrenPosition();
    cols[bye.nextPosition.col - 1].groups[bye.nextPosition.group - 1].setChildrenNextPosition();
  });
  return cols;
}

export default {
	createBoard(players) {
    let board = _.flow(shufflePlayers, createEmptyPlayers, reorderPlayers, groupPlayers, createColumns, setPositions, createByes);
    return board(players);
	}
};