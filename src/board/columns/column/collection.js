'use strict';

import { Collection } from 'orchestra';
import Model from './group/model';

export default Collection.extend({
  model: Model,
});