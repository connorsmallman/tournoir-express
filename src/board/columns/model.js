'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    position: Number,
    groups: Array,
  }
});