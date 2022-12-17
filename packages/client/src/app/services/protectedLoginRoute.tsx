import { ROUTES } from '@/shared/constants/routes';
import { useAppSelector } from '@/shared/lib/redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedLoginRoute = () => {
  const user = useAppSelector((state) => state.user);

  if (user.login) {
    return <Navigate to={ROUTES.Main} replace={true} />;
  }

  return <Outlet />;
};
