'use strict';

import { ItemView, Radio, _ } from 'orchestra';
import template from './template.hbs';

const playerChannel = Radio.channel('player');

export default ItemView.extend({
  template,
  className: 'add-player-form',
  ui: {
    'playerName': '.js-player-name',
  },
  events: {
    'keyup @ui.playerName': 'addPlayer',
  },
  onRender() {
    _.defer(() => {
      this.ui.playerName.focus();
    });
  },
  addPlayer(e) {
    if ( e.which != 13 ) return;
    let playerName = this.ui.playerName.val();

    if (playerName !== '') {
      playerChannel.trigger('add:player', playerName);
    }

    //reset form add focus to input
    this.ui.playerName.val('').focus();
  },
});
