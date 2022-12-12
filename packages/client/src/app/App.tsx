import './styles/index.scss';
import { useAppDispatch } from '@/shared/lib/redux';
import { fetchUser } from '@/entities/user/model/user';
import { MainPage } from '@/pages/MainPage';

export const App = () => {

  const dispatch = useAppDispatch();
  dispatch(fetchUser())

  // TODO remove dev pages
  return <>
  <MainPage/>
  </>
};
