import type { Request, Response } from 'express';
import type { BaseRESTService } from 'service';
import { Forum } from '../models/Forum';
import { Topic } from '../models/Topic';

export class ForumController implements BaseRESTService {
  public static request = async (_request: Request, response: Response) => {
    const forums = await Forum.findAll();

    return response.status(200).json(forums);
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;

    const forum = await Forum.findByPk(id, { include: Topic });

    return response.status(200).json(forum);
  };

  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      const forum = await Forum.create(body);
      return response.status(200).json({ id: forum.id });
    } catch {
      return response.status(400).json({ reason: 'Wrong request' });
    }
  };

  public static delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const forum = await Forum.findByPk(id);

    if (forum) {
      await forum.destroy();
    } else {
      return response.status(400).json('Forum not found');
    }

    return response.status(200).json({ id });
  };
}
