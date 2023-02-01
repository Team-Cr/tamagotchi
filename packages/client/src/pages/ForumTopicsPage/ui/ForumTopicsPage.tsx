import { ForumAPI, Topic } from '@/shared/lib/api';
import { ArrowBack } from '@/shared/ui/ArrowBack';
import { Button } from '@/shared/ui/Button';
import { ForumEntry } from '@/shared/ui/ForumEntry';
import { ForumHeader } from '@/shared/ui/ForumHeader';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AddTopicModal } from './AddTopicModal/AddTopicModal';
import css from './ForumTopicsPage.module.scss';

const ForumTopicsPage = () => {
  const { state } = useLocation();
  const [entries, setEntries] = useState<Topic[]>([]);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    ForumAPI.getTopics(state.forumId)
      .then((res) => {
        const data = res.data;
        console.log(res);
        setEntries(data);
      })
      .catch((e) => console.log({ e }));
  }, [setEntries, state]);

  const toggleModal = useCallback(() => {
    setIsModalActive((isModalActive) => !isModalActive);
  }, []);

  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.forumTitle || ''} />
      <Button size='large' color='success' className={css.topic_add_button} onClick={toggleModal}>
        Create a topic
      </Button>
      <AddTopicModal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        forumId={state.forumId}
      />
      <div className={css.topic_entries}>
        {entries.map((data, index) => (
          <ForumEntry key={index} {...data} state={{ topicTitle: data.title }} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicsPage;
