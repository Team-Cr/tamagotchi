import {
  LeaderboardPage,
  MainPage,
  NotFoundPage,
  ProfilePage,
  RegistrationPage,
  SignInPage,
} from '@/pages';
import { ROUTES } from '@/shared/constants/routes';
import { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFullscreen } from './providers/FullscreenProvider';
import { ProtectedMainRoute } from './services/protectedMainRoute';
import { ProtectedLoginRoute } from './services/protectedLoginRoute';
import { startServiceWorker } from './services/startServiceWorker';
import './styles/index.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { AuthThunk } from '@/processes/auth';

// startServiceWorker();

export const App = () => {
  const { toggleFullscreen } = useFullscreen();

  const dispatch = useAppDispatch();
  dispatch(AuthThunk.getUser());

  useEffect(() => {
    const toggleFullscreenOnKeyUp = (e: KeyboardEvent) => {
      const isEmittedByInput = !!(e.target as HTMLElement).closest('input, textarea');

      if (e.key === 'f' && !isEmittedByInput) {
        toggleFullscreen();
      }
    };

    document.addEventListener('keyup', toggleFullscreenOnKeyUp);
    return () => document.removeEventListener('keyup', toggleFullscreenOnKeyUp);
  }, [toggleFullscreen]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        {/* РОУТЫ , ДОСТУПНЫЕ ТОЛЬКО ПОСЛЕ АВТОРИЗАЦИИ */}
        {[
          { element: <MainPage key={`${Date.now()}-main`} />, route: ROUTES.Main },
          { element: <ProfilePage key={`${Date.now()}-profile`} />, route: ROUTES.Profile },
          { element: <LeaderboardPage key={`${Date.now()}-leader`} />, route: ROUTES.LeaderBoard },
        ].map((item) => (
          <Route path={item.route} element={<ProtectedMainRoute />} key={Date.now()}>
            <Route path={item.route} element={item.element} />
          </Route>
        ))}

        {/* РОУТЫ, ЗАЩИЩЕННЫЕ ОТ ВХОДА ПРИ АВТОРИЗОВАННОМ ПОЛЬЗОВАТЕЛЕ */}
        {[
          { element: <SignInPage key={`${Date.now()}-signin`} />, route: ROUTES.Login },
          { element: <RegistrationPage key={`${Date.now()}-signup`} />, route: ROUTES.SignUp },
        ].map((item) => (
          <Route path={item.route} element={<ProtectedLoginRoute />} key={Date.now()}>
            <Route path={item.route} element={item.element} />
          </Route>
        ))}

        <Route path={ROUTES.NotFound} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
