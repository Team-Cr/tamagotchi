import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { User } from '../models/User';

export class UserController implements BaseRESTService {
  public static create = async (request: Request, response: Response) => {
    const { id } = request.params;

    await User.findOrCreate({
      where: { id },
    });

    return response.status(200).json({ id });
  };
}
