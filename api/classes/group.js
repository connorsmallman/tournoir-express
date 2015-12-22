import isEven from '../helpers/evens';

export default class {
  constructor(options) {
    options = options || {};
    this.players = options.players;
    // this.nextGroup = options.nextGroup;
  }

  setPosition(position) {
    this.position = position;
  }

  setNextPosition() {
    this.nextPosition = {};
    this.nextPosition.col = this.position.col + 1;
    if (isEven(this.position.group)) {
      this.nextPosition.group = (this.position.group / 2);
    } else { 
      this.nextPosition.group = ((this.position.group + 1) / 2);
    }
  }
}