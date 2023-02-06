import { Tamagotchi } from '@/entities/tamagotchi';
import { User } from '@/shared/lib/api';

export type State = {
  user: User;
  tamagotchi: Tamagotchi;
};

declare global {
  interface Window {
    __PRELOADED_STATE__?: State;
  }
}
