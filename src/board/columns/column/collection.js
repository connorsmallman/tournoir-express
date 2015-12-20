'use strict';

import { Collection } from 'orchestra';
import Model from './tile/model';

export default Collection.extend({
  model: Model,
  comparator: 'position',
});