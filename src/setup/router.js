'use strict';

import { Router, Radio } from 'orchestra';
import LayoutView from './layout-view';
import AddPlayerView from './add/view';
import PlayersView from './players/collection-view';
import PlayersCollection from './players/collection';

const playerChannel = Radio.channel('player');

export default Router.extend({
  initialize(options = {}) {
    this.container = options.container;

    this.listenTo(this, 'before:enter', this.onBeforeEnter);
    this.listenTo(playerChannel, 'add:player', this.addPlayer);

    this.playersCollection = new PlayersCollection();
    this.listenTo(this.playersCollection, {
      'update': this.toggleGenerateTournament,
      'change': this.toggleGenerateTournament,
    });
  },

  onBeforeEnter() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    //this.playersCollection.fetch();
  },

  routes: {
    '':'index',
  },

  index() {
    this.layout.getRegion('addPlayer').show(new AddPlayerView()); 
    this.layout.getRegion('players').show(new PlayersView({ collection: this.playersCollection }));
  },

  addPlayer(playerName) {
    this.playersCollection.create({ playerName: playerName });
  },

  toggleGenerateTournament() {
    if (this.playersCollection.length > 1) {
      this.layout.enableGenerateTournament();
    } else {
      this.layout.disableGenerateTournament();
    }
  },
});