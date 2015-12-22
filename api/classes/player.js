export default class {
  constructor(player) {
    player = player || {};
    this.playerName = (typeof player.playerName != 'string') ? '' : player.playerName;
    this.isEmpty = (!this.playerName);
  }
}