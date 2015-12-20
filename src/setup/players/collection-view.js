'use strict';

import { CollectionView } from 'orchestra';
import ChildView from './item-view';

export default CollectionView.extend({
  initialize() {
    this.listenTo(this.collection, {
      'update': this.render,
      'change': this.render,
      'sync': this.render,
    });
    this.collection.fetch();

    console.log(this.collection);
  },
  childView: ChildView,
  className: 'players',
  tagName: 'ul',
});