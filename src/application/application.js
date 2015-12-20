'use strict';

import { Application, $ } from 'orchestra';
import LayoutView from './layout';

export default Application.extend({
  initialize() {
    this.layout = new LayoutView();
    this.layout.render();
  },
});