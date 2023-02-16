import { useCallback, useEffect, useState } from 'react';
import css from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  // TODO replace with database
  // const currentTheme = document.documentElement.dataset.theme;
  const currentTheme = 'light';
  const [toggled, setToggled] = useState(currentTheme ? currentTheme === 'light' : true);

  function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    // TODO replace with database
    // document.documentElement.setAttribute('data-theme', themeName);
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
