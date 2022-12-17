import { User } from '@/shared/lib/api/types/profile';

type ProtectedRouteProps = {
  user: User;
  navigate: unknown;
  children: React.ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  navigate,
  children,
  ...rest
}) => {
  if (user) {
    return children;
  }
  if (!user) {
    return ;
  }
};
