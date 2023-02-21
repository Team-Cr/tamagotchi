import { Router } from 'express';
import { ConfigurationController } from '../controllers';

export const ConfigurationAPI = Router();

ConfigurationAPI.get('/:id', ConfigurationController.find).patch(
  '/:id',
  ConfigurationController.update,
);
