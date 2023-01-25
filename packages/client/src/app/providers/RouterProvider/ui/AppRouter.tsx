import { NotFoundPage } from '@/pages';
import { ROUTES } from '@/shared/constants/routes';
import { SuspenseHelper } from '@/shared/lib/redux/suspenseHelper';
import { Loader } from '@/shared/ui/Loader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../lib/appRoutes';
import { ProtectedLoginRoute } from '../lib/protectedLoginRoute';
import { ProtectedMainRoute } from '../lib/protectedMainRoute';

export const AppRouter = () => {
  return (
    <SuspenseHelper fallback={<Loader />}>
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
    </SuspenseHelper>
  );
};
