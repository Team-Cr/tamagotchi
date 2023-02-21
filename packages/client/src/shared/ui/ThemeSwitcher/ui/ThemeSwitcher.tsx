import css from './ThemeSwitcher.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '@/shared/lib/redux';
import { THEME } from '@/shared/lib/api/types/user';
import { UserAPI } from '@/entities/user';

export const ThemeSwitcher = () => {
  const user = useAppSelector((state) => state.user);
  const [toggled, setToggled] = useState(true);

  function setTheme(themeName: string) {
    document.documentElement.setAttribute('data-theme', themeName);
  }

  const handleThemeSwitch = useCallback(async () => {
    setToggled(!toggled);
    if (user.configuration?.id) {
      await UserAPI.updateConfiguration(user.configuration.id, {
        themeId: toggled ? THEME.DARK : THEME.LIGHT,
      });
      setTheme(toggled ? 'dark' : 'light');
    }
  }, [toggled, user.configuration]);

  useEffect(() => {
    const themeId = user.configuration?.themeId || THEME.LIGHT;
    setToggled(themeId === THEME.LIGHT);
    setTheme(themeId === THEME.LIGHT ? 'light' : 'dark');
  }, [user.configuration]);

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
