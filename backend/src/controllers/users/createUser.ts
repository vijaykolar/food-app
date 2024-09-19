import { Request, Response } from "express";
import { db } from "../../db";
import { users } from "../../models";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const newUser = await db.insert(users).values({ name, email });
    res.status(201).json({ user: newUser, status: "success" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ status: "error", message: "Failed to create user" });
  }
};
