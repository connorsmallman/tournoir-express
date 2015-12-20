import { LayoutView } from 'orchestra';
import template from './layout-template.hbs';

export default LayoutView.extend({
  el: '#tournoirApp',
  template,
  regions: {
    header  : '.application__header',
    flashes : '.application__flashes',
    content : '.application__content'
  }
});