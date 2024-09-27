// import { eq } from 'drizzle-orm';
import { Request, Response } from 'express';
// import { db } from '../../db';
// import { users } from '../../models';

export const currentUser = async (req: Request, res: Response) => {
  // try {
  //   const { id }: { id: string } = req.params as { id: string };
  //   const user = await db
  //     .select()
  //     .from(users)
  //     .where((user) => eq(user.id, id));
  //   if (!user.length) {
  //     return res
  //       .status(404)
  //       .json({ status: 'error', message: 'User not found' });
  //   }
  //   return res.status(200).json({ user: user[0], status: 'success' });
  // } catch (error) {
  //   console.error('Error fetching user:', error);
  //   res.status(500).json({ status: 'error', message: 'Failed to fetch user' });
  // }

  res.send({ currentUser: 'Vijay' });
};
