import type { BaseRESTService } from 'service';
import type { Request, Response } from 'express';
import { Character } from '../models/Character';
import { pick } from '../utils/pick';

const startHp = 50
const startExperience = 0;

export class CharacterController implements BaseRESTService {
    public static create = async (request: Request, response: Response) => {
        const { id } = request.params;

        const defaultData = {
            experience: startExperience,
            hp: startHp,
            lastActiveTime: new Date(),
            userId: id
        }

        const [character, _created] = await Character.findOrCreate({
            where: {
                userId: id,
            },
            defaults: defaultData
        });

        return response.status(200).json({ character });
    };

    public static update = async (request: Request, response: Response) => {
        const { id: userId } = request.params;
        const body = request.body;
        body['lastActiveTime'] = new Date()

        const result = await Character.update(body, {
            where: {
                userId
            },
            returning: true,
            // @ts-ignore
            plain: true
        })
        // @ts-ignore
        const values = pick(result[1].dataValues as Character, ['hp', 'experience', 'lastActiveTime'])
        return response.status(200).json({ character: values });
    };
}