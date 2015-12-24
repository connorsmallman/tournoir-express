'use strict';

import { CompositeView } from 'orchestra';
import template from './template.hbs';
import ChildView from './group/item-view';
import Collection from './collection';

export default CompositeView.extend({
  initialize() {
    let groups = this.model.get('groups');
    this.collection = new Collection(groups);
  	this.model.set({ groups: this.collection });
  },
  template,
  className: 'column',
  childView: ChildView,
  childViewContainer: '.groups',
});