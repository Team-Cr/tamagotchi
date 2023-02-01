import { Router } from 'express';
import { ForumController, TopicController } from '../controllers';

export const ForumAPI = Router();

ForumAPI.get('/', ForumController.request)
  .get('/:id', ForumController.find)
  .post('/', ForumController.create)
  .post('/:forumId/topic', TopicController.create)
  .delete('/:id');
