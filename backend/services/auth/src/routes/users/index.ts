// routes/getUsers.ts
import express from 'express';
import { currentUserRouter } from './current-user';
import { signupRouter } from './signup';
// Adjust the import path according to your project structure

const router = express.Router();

// Define the route for getting all users
// router.post('/users/create', createUser);
router.use('/api/v1/users', currentUserRouter);
router.use('/api/v1/users', signupRouter);

export { router as usersRouter };
