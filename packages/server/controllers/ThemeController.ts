import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Theme } from '../models/Theme';

export class ThemeController implements BaseRESTService {
  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;

    const theme = await Theme.findByPk(id);

    return response.status(200).json(theme);
  };
}
