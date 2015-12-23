import Group from './group';

export default class {
  constructor(options) {
    options = options || {};
    this.groups = [];

    if (options.groups) {
      options.groups.forEach(group => this.addGroup(group));
    }
  }

  addGroup(group) {
    if (group instanceof Group) {
      this.groups.push(group);
    } else {
      this.groups.push(new Group({ players: group.players }));
    }
  }

  setPosition(position) {
    this.position = position;
  }
}
