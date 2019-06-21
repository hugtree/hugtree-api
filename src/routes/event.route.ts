import { Request, Response } from 'express';
import Event from '../models/Event';
import Address from '../models/Address';
import User from '../models/User';

export const listEvent = async (req: Request, res: Response) => {
  const events = await Event.findAll({
    include: [
      {
        model: Address
      },
      {
        model: User,
        as: 'users'
      }
    ]
  });

  res.send(events);
};

export const createEvent = async (req: Request, res: Response) => {
  res.status(200);
};
