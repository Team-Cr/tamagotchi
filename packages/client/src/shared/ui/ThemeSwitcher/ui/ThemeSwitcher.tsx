import { ComponentProps } from '@/shared/ui/types';
import css from './ThemeSwitcher.module.scss';
import { useCallback, useEffect, useState } from 'react';

export const ThemeSwitcher = (props: ComponentProps) => {
  const currentTheme = document.documentElement.dataset.theme;
  const [toggled, setToggled] = useState(currentTheme ? currentTheme === 'light' : true);

  function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }

  const handleThemeSwitch = useCallback(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    setToggled(!toggled);
  }, [toggled]);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

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
