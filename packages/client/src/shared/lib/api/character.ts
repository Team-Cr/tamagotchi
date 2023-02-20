import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAppInstance } from '@/shared/lib/axios';
import { CharacterData } from '@/shared/lib/api/types/character';
import { URLHelper } from '@/shared/lib/URLHelper';

const CHARACTER_URL = 'character';

const Routes = {
  GET_CHARACTER: `${CHARACTER_URL}/{id}`,
  UPDATE_CHARACTER: `${CHARACTER_URL}/{id}`,
};

export const CharacterAPI = {
  storeCharacter: (id: CharacterData['userId']): AxiosResponse<{ character: CharacterData }> =>
    axiosAppInstance.post(URLHelper.buildUrl(Routes.GET_CHARACTER, { id })),
  updateCharacter: (
    id: CharacterData['userId'],
    hp: CharacterData['hp'],
    experience: CharacterData['experience'],
  ): AxiosResponse<{ character: CharacterData }> =>
    axiosAppInstance.patch(URLHelper.buildUrl(Routes.UPDATE_CHARACTER, { id }), { hp, experience }),
};
