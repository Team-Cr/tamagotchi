import { Router } from 'express';
import { TopicController } from '../controllers';
import { CommentController } from '../controllers/CommentController';

export const TopicAPI = Router();

TopicAPI.get('', TopicController.request)
  .get('/:id', TopicController.find)
  .delete('/:id')
  .post('/:topicId/comment', CommentController.create);
