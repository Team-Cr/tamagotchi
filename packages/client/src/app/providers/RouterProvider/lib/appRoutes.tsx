import { LeaderboardPage, MainPage, ProfilePage, RegistrationPage, SignInPage } from '@/pages';
import { ROUTES } from '@/shared/constants/routes';
import { OAuthPage } from '@/pages/OAuthPage';

interface AppRoute {
  element: React.ReactNode;
  route: ROUTES;
  protectedType?: 'main' | 'login';
}

export const appRoutes: AppRoute[] = [
  {
    element: <MainPage />,
    route: ROUTES.Main,
    protectedType: 'main',
  },
  {
    element: <ProfilePage />,
    route: ROUTES.Profile,
    protectedType: 'main',
  },
  {
    element: <LeaderboardPage />,
    route: ROUTES.LeaderBoard,
    protectedType: 'main',
  },
  {
    element: <SignInPage />,
    route: ROUTES.Login,
    protectedType: 'login',
  },
  {
    element: <RegistrationPage />,
    route: ROUTES.SignUp,
    protectedType: 'login',
  },
  {
    element: <OAuthPage />,
    route: ROUTES.OAuth,
    protectedType: 'login',
  },
];
