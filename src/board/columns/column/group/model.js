'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    position: Number,
    groupId: String,
    nextGroupId: String,
    players: Array,
  }
});