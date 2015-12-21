'use strict';

import { Collection } from 'orchestra';

export default Collection.extend({
  defaults: {
    columnId: String,
    groups: Array,
  }
});