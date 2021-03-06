import _ from 'lodash';
import isEven from '../helpers/evens';
import Player from './player';

export default class {
  constructor(options) {
    options = options || {};
    this.players = [];
    this.position = {};
    this.nextPosition = {};

    if (options.players) {
      options.players.forEach(player => this.addPlayer(player));
    }
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      this.players.push(new Player(player));
    }
    return this;
  }

  setPosition(position) {
    this.position = position;
    this.players.forEach(player => player.setPosition(position));
    return this;
  }

  setNextPosition(nextPosition) {
    this.nextPosition.col = this.position.col + 1;
    this.nextPosition.group = (isEven(this.position.group)) ? (this.position.group / 2) : ((this.position.group + 1) / 2);
    return this;
  }

  setChildrenPosition() {
    if (this.players.length) {
      this.players.forEach(player => player.setPosition(this.position));
    }
    return this;
  }

  setChildrenNextPosition() {
    if (this.players.length) {
      this.players.forEach(player => player.setNextPosition(this.nextPosition));
    }
    return this;
  }
}