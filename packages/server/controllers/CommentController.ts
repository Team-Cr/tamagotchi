import type { Request, Response } from 'express';
import type { BaseRESTService } from 'service';
import { Comment } from '../models/Comment';

export class CommentController implements BaseRESTService {
  public static create = async (request: Request, response: Response) => {
    const { body, params } = request;
    const { topicId } = params;

    const commentData = { ...body, topicId: +topicId };
    commentData.commentId = commentData.commentId ? commentData.commentId : null;

    try {
      const comment = await Comment.create(commentData);
      return response.status(200).json({ id: comment.id });
    } catch (error) {
      return response.status(400).json({ reason: 'Wrong request', error });
    }
  };

  public static getByTopic = async (request: Request, response: Response) => {
    const { topicId } = request.params;

    try {
      const comments = await Comment.findAll({
        where: {
          topicId,
        },
      });
      return response.status(200).json(comments);

      //  TODO add tree output for comments
    } catch (error) {
      return response.status(400).json({ reason: 'Wrong request', error });
    }
  };
}
