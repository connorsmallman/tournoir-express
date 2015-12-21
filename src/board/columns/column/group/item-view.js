'use strict';

import { ItemView } from 'orchestra';
import Model from './model';
import template from './template.hbs';

export default ItemView.extend({
  className: 'group',
  template,
});