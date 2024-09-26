// routes/getUsers.ts
import express from 'express';
import { getAllUsers } from '../../controllers/users'; // Adjust the import path according to your project structure

const router = express.Router();

// Define the route for getting all users
router.get('/users', getAllUsers);
// router.post('/users/create', createUser);
// router.get('/users/:id', getUser);

export { router as usersRouter };
