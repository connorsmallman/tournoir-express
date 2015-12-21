'use strict';

import { CompositeView, Collection } from 'orchestra';
import template from './template.hbs';
import TileView from './tile/item-view';
import TilesCollection from './collection';

export default CompositeView.extend({
  initialize() {
    this.listenTo(this.collection, 'update', this.render);
    let tiles = this.model.get('tiles');
    this.collection = new TilesCollection(tiles);
  },
  template,
  className: 'column',
  childView: TileView,
  childViewContainer: '.groups',
  reorderOnSort: true,
  attributes() {
    let columnId = this.model.get('columnId');
    return {
      'data-column-id': columnId,
    };
  }
});