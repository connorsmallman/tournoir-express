export default class {
  constructor(player) {
    player = player || {};
    this.playerName = (typeof player.playerName != 'string') ? '' : player.playerName;
    this.isEmpty = player.isEmpty || (!this.playerName);
  }

  setPosition(position) {
    this.position = position;
  }

  setNextPosition(position) {
    this.nextPosition = position;
  }
}