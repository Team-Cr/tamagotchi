import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Theme } from '../models/Theme';

export class ThemeController implements BaseRESTService {
  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;

    const theme = await Theme.findByPk(id);

    return response.status(200).json(theme);
  };

  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    try {
      const theme = await Theme.create(body);
      return response.status(200).json({ id: theme.id });
    } catch {
      return response.status(400).json({ reason: 'Wrong request' });
    }
  };
}
