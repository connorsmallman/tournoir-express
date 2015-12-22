import playersController from './players';
import boardGenerator from '../services/boardGenerator';

export default {
	create() {
    return new Promise((resolve, reject) => {
      let players = playersController.all();
      players.then((players) => {
        resolve(boardGenerator.createBoard(players));
      });
    });
	},
}