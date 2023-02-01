import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Topic } from '../models/Topic';
import { Forum } from '../models/Forum';

export class TopicController implements BaseRESTService {
  public static request = async (_request: Request, response: Response) => {
    const topic = await Topic.findAll();

    return response.status(200).json(topic);
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;

    const topic = await Topic.findByPk(id);

    return response.status(200).json(topic);
  };

  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { forumId } = request.params;

    try {
      const forum = await Forum.findByPk(forumId);
      if (!forum) {
        return response.status(404).json({ reason: 'Forum not found' });
      }

      const topic = await Topic.create({ ...body, forumId });
      return response.status(200).json({ id: topic.id });
    } catch (err) {
      return response.status(400).json({ reason: 'Wrong request', error: err });
    }
  };

  public static delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const topic = await Topic.findByPk(id);

    if (topic) {
      await topic.destroy();
    } else {
      return response.status(400).json('Topic not found');
    }

    return response.status(200).json({ id });
  };
}
