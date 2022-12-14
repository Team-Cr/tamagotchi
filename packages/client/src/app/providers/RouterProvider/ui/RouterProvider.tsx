import { NotFoundPage } from '@/pages';
import { ROUTES } from '@/shared/constants/routes';
import { AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { appRoutes } from '../lib/appRoutes';
import { ProtectedLoginRoute } from '../lib/protectedLoginRoute';
import { ProtectedMainRoute } from '../lib/protectedMainRoute';

interface WithRouterProps {
  children: React.ReactNode;
}

export const RouterProvider = (props: WithRouterProps) => {
  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
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
        </Suspense>
      </AnimatePresence>
      {props.children}
    </Router>
  );
};
