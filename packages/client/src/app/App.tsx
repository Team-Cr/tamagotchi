import './styles/index.scss';
import { ProfilePage } from '@/pages/ProfilePage';
import { useAppDispatch } from '@/shared/lib/redux';
import { fetchUser } from '@/entities/user/model/user';

export const App = () => {

  const dispatch = useAppDispatch();
  dispatch(fetchUser())

  return <>
  <ProfilePage/>
  </>
};
