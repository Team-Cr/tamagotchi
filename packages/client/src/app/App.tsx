import { LeaderboardPage, MainPage, NotFoundPage, ProfilePage, SignInPage } from '@/pages';
import { ROUTES } from '@/shared/constants/routes';
import { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useFullscreen } from './providers/FullscreenProvider';
import { ProtectedRoute } from './services/protectedRoute';
import { startServiceWorker } from './services/startServiceWorker';
import './styles/index.scss';

// startServiceWorker();

export const App = () => {
  const { toggleFullscreen } = useFullscreen();
  const navigate = useNavigate();
  const user = use
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
        <ProtectedRoute >
          <Route path={ROUTES.Main} element={<MainPage />} />
        </ProtectedRoute>
        <Route path={ROUTES.Profile} element={<ProfilePage />} />
        <Route path={ROUTES.Login} element={<SignInPage />} />
        <Route path={ROUTES.LeaderBoard} element={<LeaderboardPage />} />
        <Route path={ROUTES.NotFound} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
