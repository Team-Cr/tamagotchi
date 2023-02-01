import { Router } from 'express';
import { ForumController } from '../controllers';

export const ForumAPI = Router();

ForumAPI.get('', ForumController.request)
  .get('/:id', ForumController.find)
  .post('', ForumController.create)
  .delete('/:id');
