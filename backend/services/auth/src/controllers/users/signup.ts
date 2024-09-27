import { Request, Response } from 'express';
import { db } from '../../db';
import { users } from '../../models';

export const signUp = async (req: Request, res: Response) => {
  res.json({ message: 'Hello from signup' });
};
