// routes/getUsers.ts
import express from "express";
import { createUser, getAllUsers, getUser } from "../../controllers/users"; // Adjust the import path according to your project structure

const router = express.Router();

// Define the route for getting all users
router.get("/users", getAllUsers);
router.post("/user/create", createUser);
router.get("/user/:id", getUser);

export { router as usersRouter };
