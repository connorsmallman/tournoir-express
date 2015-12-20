'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  idAttribute: '_id',
  defaults: {
    playerName: String,
  },
});