import { store } from '@/app/store';
import { addPoints } from '@/entities/tamagotchi';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { useRef, useCallback } from 'react';
import { CharacterAPI } from '@/shared/lib/api/character';
import { ActionBlockProps } from '../ui/ActionBlock';

const updateDebounceSeconds = 2000;

export const useBarsPoints = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();
  const { level, hpCurrent } = useAppSelector((state) => state.tamagotchi);

  const update = useCallback(() => {
    const { tamagotchi, user } = store.getState();
    const { level, expMax, expCurrent, hpCurrent } = tamagotchi;
    const exp = (level - 1) * expMax + expCurrent;
    CharacterAPI.updateCharacter(user.id, hpCurrent, exp);
  }, []);

  const updateBarsPoints: ActionBlockProps['handleUpdateBarsPoints'] = useCallback(
    (points) => {
      dispatch(addPoints(points));
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(update, updateDebounceSeconds);
    },
    [update, dispatch],
  );

  return {
    level,
    hpCurrent,
    updateBarsPoints,
  };
};
