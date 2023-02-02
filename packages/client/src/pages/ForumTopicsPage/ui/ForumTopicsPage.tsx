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

  const toggleModal = useCallback(() => {
    setIsModalActive((isModalActive) => !isModalActive);
  }, []);

  const getTopics = useCallback(() => {
    ForumAPI.getForum(state.forumId)
      .then((res) => {
        const { topics } = res.data;
        console.log(res.data);
        setEntries(topics ?? []);
      })
      .catch((e) => console.log({ e }));
  }, [state]);

  const onCreateTopic = useCallback(
    async (forumId: number, title: string) => {
      const topic = await ForumAPI.createTopic(forumId, {
        title,
      });

      console.log(topic);
      getTopics();
      setIsModalActive(false);
    },
    [getTopics],
  );

  useEffect(() => {
    getTopics();
  }, [getTopics]);

  return (
    <>
      <ArrowBack />
      <ForumHeader title={state.title || ''} />
      <Button size='large' color='success' className={css.topic_add_button} onClick={toggleModal}>
        Create a topic
      </Button>
      <AddTopicModal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        forumId={state.forumId}
        onCreateTopic={onCreateTopic}
      />
      <div className={css.topic_entries}>
        {entries.map((data, index) => (
          <ForumEntry
            link={`/topic/${data.id}`}
            key={index}
            {...data}
            title={data.title}
            state={{ title: data.title }}
          />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ForumTopicsPage;
