'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    position: 0,
    tileId: 0,
    nextTileId: 0,
    player: {
      playerId: '',
      playerName: '',
    }
  }
});