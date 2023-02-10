import { Router } from 'express';
import { CommentController } from '../controllers';

export const CommentAPI = Router();

CommentAPI.get('/:topicId', CommentController.getByTopic);
