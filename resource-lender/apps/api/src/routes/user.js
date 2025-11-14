import { Router } from 'express'
import { fetchUsers, fetchSpecificUser } from '../controllers/users.controller.js'
const router = Router();
router.get('/', fetchUsers);
router.get('/:id', fetchSpecificUser);

export default router