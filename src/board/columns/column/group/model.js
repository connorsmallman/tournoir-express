'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    order: Number,
    groupId: String,
    nextGroupId: String,
    players: Array,
  }
});