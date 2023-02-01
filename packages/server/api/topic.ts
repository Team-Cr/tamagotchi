import { Router } from 'express';
import { TopicController } from '../controllers';

export const TopicAPI = Router();

TopicAPI.get('/', TopicController.request).get('/:id', TopicController.find).delete('/:id');
