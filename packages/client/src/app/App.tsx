import { useEffect } from 'react';
import './styles/index.scss';

import { SignInPage } from '@/pages/SignInPage/ui/SignInPage';

export const App = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);

  return (
    <>
      <SignInPage />
    </>
  );
};
