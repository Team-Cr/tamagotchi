import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Configuration } from '../models/Configuration';

export class ConfigurationController implements BaseRESTService {
  public static update = async (request: Request, response: Response) => {
    const { body, params } = request;
    await Configuration.update(body, {
      where: {
        id: params.id,
      },
    });
    const configuration = await Configuration.findByPk(params.id);

    return response.status(200).json(configuration);
  };

  public static find = async (request: Request, response: Response) => {
    const { id } = request.params;
    const configuration = await Configuration.findOne({
      where: {
        userId: id,
      },
    });

    return response.status(200).json(configuration);
  };
}
