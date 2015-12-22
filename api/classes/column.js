export default class {
  constructor(options) {
    options = options || {};
    this.groups = options.groups;
  }

  setPosition(position) {
    this.position = position;
  }
}
