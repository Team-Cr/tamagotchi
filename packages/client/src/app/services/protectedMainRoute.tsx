import { ROUTES } from '@/shared/constants/routes';
import { useAppSelector } from '@/shared/lib/redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedMainRoute = () => {
  const user = useAppSelector((state) => state.user);
  console.log('USER', user);
  if (!user.login) {
    return <Navigate to={ROUTES.Login} replace={true} />;
  }

  return <Outlet />;
};
