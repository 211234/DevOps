import { Router } from 'express';
import { updateUserProfile } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = Router();

router.put('/:id', authMiddleware, updateUserProfile);

export default router;
