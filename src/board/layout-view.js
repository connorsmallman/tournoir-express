'use strict';

import { LayoutView } from 'orchestra';
import template from './template.hbs';

export default LayoutView.extend({
  template,
  className: 'board',
  regions: {
    'columns': '.columns-container',
  },
});