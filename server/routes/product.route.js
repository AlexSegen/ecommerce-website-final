import { Router } from 'express';
import { test, create, get, getAll } from '../controllers/product.controller';

const router = Router();

router.get('/test', test);
router.get('/:id', get);
router.get('/', getAll);
router.post('/', create);
export default router;
