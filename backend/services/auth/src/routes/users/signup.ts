import express, { Request, Response } from 'express';
import { signUp } from '../../controllers/users';

const router = express.Router();

router.post('/signup', signUp);

export { router as signupRouter };
