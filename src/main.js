'use strict';

import { history } from 'orchestra';
import Application from './application/application';
import SetupRouter from './setup/router';
import BoardRouter from './board/router';

let app = new Application();

app.setup = new SetupRouter({
  container: app.layout.content,
});

app.board = new BoardRouter({
  container: app.layout.content,
});

app.start();

history.start();