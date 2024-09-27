import express, { Request, Response } from 'express';
import { signUp } from '../../controllers/users';

const router = express.Router();

router.get('/signup', signUp);

export { router as signupRouter };
