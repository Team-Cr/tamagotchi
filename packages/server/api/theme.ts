import { Router } from 'express';
import { ThemeController } from '../controllers';

export const ThemeAPI = Router();

ThemeAPI
  .get('/:id', ThemeController.find)
  .post('', ThemeController.create)
