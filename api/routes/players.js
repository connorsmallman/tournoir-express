import { Router } from 'express';
import controller from '../controllers/players';

const router = Router();

router.get('/', (req, res, next) => {
	let players = controller.all();
	players
		.then(players => res.send(players))
		.catch(err => {
			res.sendStatus(500).send(err);
		});
});

router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	let player = controller.get(id);
	player
		.then(player => res.send(player))
		.catch(err => {
			res.sendStatus(500).send(err);
		});
});

router.post('/', (req, res, next) => {
	let player = req.body;
	let players = controller.create(player);
	players
		.then(response => res.send(response))
		.catch(err => {
			res.sendStatus(500).send(err);
		});
});

router.delete('/:id', (req, res, next) => {
	let id = req.params.id;
	let player = controller.del(id);
	player
		.then(response => res.send(response))
		.catch(err =>{
			res.sendStatus(500).send(err);
		});
});

export default router;