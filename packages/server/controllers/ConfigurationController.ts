import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Configuration } from '../models/Configuration';

export class ConfigurationController implements BaseRESTService {
  public static update = async (request: Request, response: Response) => {
    const { body, params } = request;
    const configuration = await Configuration.update(body, {
      where: {
        id: params.id,
      },
    });

    return response.status(200).json(configuration);
  };
}
