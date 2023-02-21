import css from './ThemeSwitcher.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { ConfigurationThunk } from '@/entities/configuration';
import { THEME } from '@/shared/lib/api';

export const ThemeSwitcher = () => {
  const config = useAppSelector((state) => state.configuration);
  const dispatch = useAppDispatch();
  const [toggled, setToggled] = useState(true);

  function setTheme(themeName: string) {
    document.documentElement.setAttribute('data-theme', themeName);
  }

  const handleThemeSwitch = useCallback(async () => {
    if (config.id) {
      dispatch(
        ConfigurationThunk.updateConfiguration({
          ...config,
          themeId: toggled ? THEME.DARK : THEME.LIGHT,
        }),
      );
    } else {
      setToggled(!toggled);
      setTheme(!toggled ? 'light' : 'dark');
    }
  }, [config, dispatch, toggled]);

  useEffect(() => {
    const themeId = config.themeId || THEME.LIGHT;
    const isLight = themeId === THEME.LIGHT;
    setToggled(isLight);
    setTheme(isLight ? 'light' : 'dark');
  }, [config, config.themeId]);

  return (
    <div className={css.switcher}>
      <label>
        <input
          type='checkbox'
          checked={toggled}
          onChange={handleThemeSwitch}
          className={css.switcher__input}
        />
        <span className={css.switcher__slider}></span>
      </label>
    </div>
  );
};
