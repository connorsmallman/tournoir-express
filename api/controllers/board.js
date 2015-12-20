import playersController from './players';
import boardGenerator from '../services/boardGenerator';

export default {
	create() {
		let players = playersController.all();
		players.then((players) => {
			console.log(players);
			//boardGenerator.createBoard(players);
		});
	},
}