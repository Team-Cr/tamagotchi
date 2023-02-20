import css from './ThemeSwitcher.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { ThemeThunk } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/redux';

export const ThemeSwitcher = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const dispatch = useAppDispatch()
  const [toggled, setToggled] = useState(currentTheme ? currentTheme === 'light' : true);

  function setTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }

  const handleThemeSwitch = useCallback(() => {
    const data = currentTheme === 'light' ? {id:0,name:"dark"} : {id:1,name:'light'}
    dispatch(ThemeThunk.updateTheme(data));

    if (localStorage.getItem('theme') === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    setToggled(!toggled);
  }, [currentTheme, dispatch, toggled]);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      console.log('here')
      setTheme('dark');
      setToggled(false)
    } else {
      setTheme('light');
    }
  },[setToggled]);

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
