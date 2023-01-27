import { LeaderboardPage, MainPage, ProfilePage, RegistrationPage, SignInPage } from '@/pages';
import { ForumPage } from '@/pages/ForumPage';
import { OAuthPage } from '@/pages/OAuthPage';
import { ROUTES } from '@/shared/constants/routes';

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
    element: <ForumPage />,
    route: ROUTES.Forums,
    protectedType: 'main',
  },
  {
    element: <ForumPage />,
    route: ROUTES.Topics,
    protectedType: 'main',
  },
  {
    element: <ForumPage />,
    route: ROUTES.Topic,
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
