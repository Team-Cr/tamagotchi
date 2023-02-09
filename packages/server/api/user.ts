import { Router } from 'express';
import { UserController } from '../controllers';

export const UserAPI = Router();

UserAPI.post('/:id', UserController.create);
