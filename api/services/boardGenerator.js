import { _ } from 'lodash';
import Player from '../classes/player';
import Group from '../classes/group';
import Column from '../classes/column';

function createEmptyPlayers(players) {
  if (players.length === 1) {
    players.push({ playerName: '' });
    return createEmptyPlayers(players);
  } else if (players.length !== 2 && players.length % 4) {
    players.push({ playerName: '' });
    return createEmptyPlayers(players);
  } else {
    return players;
  }
}

function shufflePlayers(players) {
  return _.shuffle(players);
}

function groupPlayers(players) {
  return _.chunk(players, 2);
}

function createColumns(playerGroups) {
  let cols = [];
  //Add playerGroups to first column;
  let groups = _.map(playerGroups, xs => new Group({ players: _.map(xs, x => new Player(x)) }));
  cols.push(new Column({ groups }));
  // create empty groups for rest of columns
  for (let i = (playerGroups.length - 1); i > 0; i--) {
    if (i === 1) break;
    let groups = _.map(_.range(i / 2), xs => new Group({ players: _.map(_.range(2), x => new Player(x)) }));
    cols.push(new Column({ groups }));
  }
  return cols;
}

function setPositions(cols) {
  for (let i = 0; i < cols.length; i++) {
    cols[i].setPosition(i + 1);
    for (let j = 0; j < cols[i].groups.length; j++) {
      cols[i].groups[j].setPosition({ col: i + 1, group: j + 1 });
      if (i === cols.length - 1) break; //if last group don't set next position.
      cols[i].groups[j].setNextPosition();
    }
  }
  return cols;
}

export default {
	createBoard(players) {
    let board = _.flow(createEmptyPlayers, shufflePlayers, groupPlayers, createColumns, setPositions);
    return board(players);
	}
};