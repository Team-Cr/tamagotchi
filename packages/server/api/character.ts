import { Router } from 'express';
import { CharacterController } from '../controllers';

export const CharacterAPI = Router();

CharacterAPI.post('/:id', CharacterController.create).patch('/:id', CharacterController.update);
