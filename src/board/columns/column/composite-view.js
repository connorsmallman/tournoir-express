'use strict';

import { CompositeView, Collection } from 'orchestra';
import template from './template.hbs';
import GroupView from './group/item-view';
import Groups from './collection';

export default CompositeView.extend({
  initialize() {
    this.listenTo(this.collection, 'update', this.render);
    let groups = this.model.get('groups');
    this.collection = new Groups(groups);
  },
  template,
  className: 'column',
  childView: GroupView,
  childViewContainer: '.groups',
  reorderOnSort: true,
  attributes() {
    let columnId = this.model.get('columnId');
    return {
      'data-column-id': columnId,
    };
  }
});