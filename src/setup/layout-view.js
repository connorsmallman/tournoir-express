'use strict';

import { LayoutView, history, $ } from 'orchestra';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template,
  className: 'setup-container',
  ui: {
    'generate':'.js-generate-tournament',
  },
  events: {
    'click @ui.generate': 'generateTounament',
  },
  enableGenerateTournament() {
    this.ui.generate.show();
  },
  disableGenerateTournament() {
    this.ui.generate.hide();
  },
  generateTounament() {
    console.log('click');
    $.post('/api/board').done(board => {
      window.localStorage.setItem('board', JSON.stringify(board));
    });
    history.navigate('board', { trigger: true });
  },
  regions: {
    addPlayer: '.add-player-container',
    players: '.players-container',
  }
});