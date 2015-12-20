'use strict';

import { CollectionView } from 'orchestra';
import ColumnView from './column/composite-view';

export default CollectionView.extend({
  childView: ColumnView,
  className: 'columns',
});