import { NotFoundPage } from '@/pages';
import { ROUTES } from '@/shared/constants/routes';

import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../lib/appRoutes';
import { ProtectedLoginRoute } from '../lib/protectedLoginRoute';
import { ProtectedMainRoute } from '../lib/protectedMainRoute';

export const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          path={route.route}
          element={
            route.protectedType === 'main' ? <ProtectedMainRoute /> : <ProtectedLoginRoute />
          }
          key={`${route.route}-${Date.now()}`}
        >
          <Route path={route.route} element={route.element} />
        </Route>
      ))}

      <Route path={ROUTES.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};
