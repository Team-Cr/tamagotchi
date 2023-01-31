import { ArrowBack } from '@/shared/ui/ArrowBack';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { useLocation } from 'react-router-dom';

const ForumTopicPage = () => {
  const { state } = useLocation();
  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.topicTitle} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicPage;
