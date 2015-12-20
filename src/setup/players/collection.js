'use strict';

import { Collection } from 'orchestra';
import Model from './model';

export default Collection.extend({
  url: '/api/players',
  model: Model,
});