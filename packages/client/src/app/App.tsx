import { useEffect } from 'react';
import './styles/index.scss';
import { withProviders } from './providers'
import { Routing } from '@/pages'

const App = () => {
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
      {/*<div className='App'>Вот тут будет жить ваше приложение :)</div>*/}
      <Routing/>
    </>
  );
};


// eslint-disable-next-line import/no-default-export
export default withProviders(App);
