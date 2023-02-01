import { ForumAPI } from '@/shared/lib/api';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';

interface AddTopicModalProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  forumId: number;
}

export const AddTopicModal = (props: AddTopicModalProps) => {
  const { isActive, setIsActive, forumId } = props;
  const [title, setTitle] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const createTopic = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      ForumAPI.createTopic(forumId, {
        title,
      });
      setTitle('');
      setIsActive(false);
    },
    [forumId, title, setTitle, setIsActive],
  );

  return (
    <Modal
      isActive={isActive}
      setIsActive={setIsActive}
      title={'New topic'}
      isCloseButtonShown={false}
      isClosable={true}
    >
      <form onSubmit={createTopic}>
        <Input name='title' type='text' value={title} onChange={onChange} placeholder='Title' />
        <Button color='success' size='large' type='submit'>
          Create!
        </Button>
      </form>
    </Modal>
  );
};
