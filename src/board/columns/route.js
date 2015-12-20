import { Route } from 'orchestra';
import Collection from './collection';
import ColumnsView from './collection-view';

export default Route.extend({
  initialize(options = {}) {
    this.collection = new Collection();
    this.layout = options.layout;
  },

  fetch() {
    return this.collection.fetch();
  },

  render() {
    this.layout.getRegion('columns').show(new ColumnsView({
      collection: this.collection,
    }));
  }
});