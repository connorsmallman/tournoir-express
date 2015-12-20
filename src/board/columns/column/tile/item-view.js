'use strict';

import { ItemView } from 'orchestra';
import Model from './model';
import template from './template.hbs';

export default ItemView.extend({
  className: 'tile',
  template,
  attributes() {
    let player = this.model.get('player');
    let position = this.model.get('order');
    let tileId = this.model.get('tileId');
    let nextTileId = this.model.get('nextTileId');

    return {
      'data-tile-id': tileId,
      'data-next-tile-id': nextTileId,
      'data-player-id': player.playerId,
      'data-position': position,
    };
  },
});