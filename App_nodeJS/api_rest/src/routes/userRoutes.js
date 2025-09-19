import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir em uma App real
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);
///////////////////////////////////////////////////////
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
