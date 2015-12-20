import { Router } from 'express';
import controller from '../controllers/board';

let router = Router();

router.post('/', (req, res, next) => {
	let board = controller.create();
});

export default router;