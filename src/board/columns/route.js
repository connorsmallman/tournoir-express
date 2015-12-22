import { Route } from 'orchestra';
import Collection from './collection';
import ColumnsView from './collection-view';

export default Route.extend({
  initialize(options = {}) {
    let columns = JSON.parse(window.localStorage.getItem('board'));
    this.collection = new Collection(columns);
    this.layout = options.layout;
  },

  fetch() {
    return this.collection;
  },

  render() {
    let view = new ColumnsView({
      collection: this.collection,
    });

    console.log(view);

    this.layout.getRegion('columns').show(view);
  }
});