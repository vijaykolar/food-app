import { Request, Response } from "express";
import { db } from "../../db";
import { users } from "../../models"; // Adjust the import path according to your project structure

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await db.select().from(users);
    if (!allUsers.length) {
      return res
        .status(404)
        .json({ status: "error", message: "No users found" });
    }
    res.status(200).json({ users: allUsers, status: "success" });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ status: "error", message: "Failed to fetch users" });
  }
};
