import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { User } from '../models/User';
import { Configuration } from '../models/Configuration';

export class UserController implements BaseRESTService {
  public static create = async (request: Request, response: Response) => {
    const { id } = request.params;

    const user = await User.findOrCreate({
      where: { id },
    });
    await Configuration.findOrCreate({
      where: { userId: id },
    });

    return response.status(200).json(user);
  };
}
