'use strict';

import { ItemView, $ } from 'orchestra';
import template from './template.hbs';

export default ItemView.extend({
  className: 'player',
  tagName: 'li',
  template,
  ui: {
    'remove':'.js-remove-player'
  },
  events: {
    'click @ui.remove': 'removePlayer',
  },
  removePlayer() {
    this.model.destroy({ wait: true });
    //Add focus back to input;
    $('.js-player-name').focus();
  },
});