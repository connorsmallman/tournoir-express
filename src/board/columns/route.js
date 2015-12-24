import { Route, Radio } from 'orchestra';
import Collection from './collection';
import ColumnsView from './collection-view';

let playerChannel = Radio.channel('player');

export default Route.extend({
  initialize(options = {}) {
    let columns = JSON.parse(window.localStorage.getItem('board'));
    this.collection = new Collection(columns);
    this.layout = options.layout;
    this.listenTo(playerChannel, 'move:player', this.movePlayer, this);
  },

  fetch() {
    return this.collection;
  },

  movePlayer(player) {
    let colIndex = player.nextPosition.col - 1;
    let groupIndex = player.nextPosition.group - 1;
    let groups = this.collection.at(colIndex).get('groups');
    let group = groups.at(groupIndex);
    group.addPlayer(player);
  },

  render() {
    let view = new ColumnsView({
      collection: this.collection,
    });
    this.layout.getRegion('columns').show(view);
  }
});