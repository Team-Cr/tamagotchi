import type { BaseRESTService } from 'service';
import { Comment } from '../models/Comment';
import type { Request, Response } from 'express';

export class CommentController implements BaseRESTService {
  public static create = async (request: Request, response: Response) => {
    const { body, params } = request;
    const { topicId } = params;

    try {
      const comment = await Comment.create({ ...body, topicId });
      return response.status(200).json({ id: comment.id });
    } catch (error) {
      return response.status(400).json({ reason: 'Wrong request', error });
    }
  };

  // public static getByTopic = async (request: Request, response: Response) => {
  //   const { topicId } = request.params;
  //
  //   try {
  //     const topic = await Topic.findByPk(topicId);
  //
  //    TODO add tree output for comments
  //   } catch (error) {
  //     return response.status(400).json({ reason: 'Wrong request', error });
  //   }
  // }
}
