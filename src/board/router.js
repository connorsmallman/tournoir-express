'use strict';

import { Router, Radio, Collection } from 'orchestra';
import LayoutView from './layout-view';
import ColumnsRoute from './columns/route';

const playerChannel = Radio.channel('player');

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.listenTo(this, 'before:enter', this.onBeforeEnter);
  },

  onBeforeEnter() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
  },

  routes: {
    'board':'board',
  },

  board() {
    return new ColumnsRoute({
      layout: this.layout,
    });
  }
});