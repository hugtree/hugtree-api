import { Request, Response } from 'express';
import User from '../models/User';

export const listUser = async (req: Request, res: Response) => {
  const kyan = await User.create({
    firstName: 'Kun',
    lastName: 'Yan',
    email: 'kyan@redhat.com',
    mobile: '15210009930'
  });

  console.log(kyan.id);

  const users = await User.findAll();

  res.send(users);
};

export const createUser = async (req: Request, res: Response) => {
  res.status(200);
};
