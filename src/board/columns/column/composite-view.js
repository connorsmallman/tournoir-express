'use strict';

import { CompositeView, Collection } from 'orchestra';
import template from './template.hbs';
import ChildView from './group/item-view';

export default CompositeView.extend({
  initialize() {
    let groups = this.model.get('groups');
    this.collection = new Collection(groups);
  },
  template,
  className: 'column',
  childView: ChildView,
  childViewContainer: '.groups',
});