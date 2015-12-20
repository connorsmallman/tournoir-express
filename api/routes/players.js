import { Router } from 'express';
import controller from '../controllers/players';

const router = Router();

router.get('/', (req, res, next) => {
	let all = controller.all();
	all.then(players => res.send(players));
});

router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	let player = controller.get(id);
	player.then(player => res.send(player));
});

router.post('/', (req, res, next) => {
	let player = req.body;
	let players = controller.create(player);
	players.then(response => res.send(response));
});

router.delete('/:id', (req, res, next) => {
	let id = req.params.id;
	let player = controller.del(id);
	player.then(response => res.send(response));
});

export default router;