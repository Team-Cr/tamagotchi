import { LeaderboardPage, MainPage, ProfilePage, RegistrationPage, SignInPage } from "@/pages";
import { ROUTES } from "@/shared/constants/routes";

interface AppRoute {
  element: React.ReactNode;
  route: ROUTES;
  isProtected?: 'main' | 'login' ;
}

export const appRoutes: AppRoute[] = [
  {
    element: <MainPage />,
    route: ROUTES.Main,
    isProtected: "main",
  },
  {
    element: <ProfilePage />,
    route: ROUTES.Profile,
    isProtected: "main",
  },
  {
    element: <LeaderboardPage />,
    route: ROUTES.LeaderBoard,
    isProtected: "main",
  },
  {
    element: <SignInPage />,
    route: ROUTES.Login,
    isProtected: "login",
  },
  {
    element: <RegistrationPage/>,
    route: ROUTES.SignUp,
    isProtected: "login",
  },
];