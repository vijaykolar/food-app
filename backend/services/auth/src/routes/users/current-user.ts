import express from 'express';
import { currentUser, signUp } from '../../controllers/users';

const router = express.Router();

router.get('/current-user', currentUser);

export { router as currentUserRouter };
