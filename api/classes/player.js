export default class {
  constructor(player) {
    player = player || {};
    this.playerName = (typeof player.playerName != 'string') ? '' : player.playerName;
    this.isVacant = player.isVacant || false;
    this._id = player._id || null;
  }

  setPosition(position) {
    this.position = position;
  }

  setNextPosition(position) {
    this.nextPosition = position;
  }
}