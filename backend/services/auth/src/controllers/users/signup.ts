import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
// import { db } from '../../db';
// import { users } from '../../models';

export const signUp = [
  // Add validators here
  body('email').isEmail().withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  // Main route handler
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation errors if any
      // throw new Error('Invalid email or password');
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Continue with save logic here (e.g., saving the user)

    res.status(201).json({ email, password });
  },
];
