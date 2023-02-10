import { Router } from 'express';
import { CommentController, TopicController } from '../controllers';

export const TopicAPI = Router();

TopicAPI.get('', TopicController.request)
  .get('/:id', TopicController.find)
  .delete('/:id')

  .post('/:topicId/comment', CommentController.create);
