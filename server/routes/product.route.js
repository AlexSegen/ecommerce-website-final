import { Router } from 'express';
import { create, get, getAll, update, remove } from '../controllers/product.controller';

const router = Router();

router.get('/:id', get);
router.get('/', getAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
export default router;
