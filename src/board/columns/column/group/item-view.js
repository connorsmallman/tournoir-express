'use strict';

import { ItemView, $, _, Radio } from 'orchestra';
import template from './template.hbs';

let playerChannel = Radio.channel('player');

export default ItemView.extend({
  initialize() {
  	this.listenTo(this.model, 'change', this.render);
  },
  className: 'group',
  template,
  ui: {
  	'player': '.player',
  },
  events: {
  	'click @ui.player': 'winner',
  },
  onRender() {
  	console.log(this);
  },
  winner(ev) {
  	let $player = $(ev.target);
  	if ($player.hasClass('vacant-player')) return false;
  	let id = $player.attr('data-id');
  	let player = _.find(this.model.get('players'), { _id: id });
  	playerChannel.trigger('move:player', player);
  }
});