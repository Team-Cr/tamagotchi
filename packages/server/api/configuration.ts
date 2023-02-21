import { Router } from 'express';
import { ConfigurationController } from '../controllers';

export const ConfigurationAPI = Router();

ConfigurationAPI.patch('/:id', ConfigurationController.update);
