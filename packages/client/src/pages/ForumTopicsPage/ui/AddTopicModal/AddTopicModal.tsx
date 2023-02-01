import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface AddTopicModalProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  forumId: number;
  onCreateTopic: (forumId: number, title: string) => void;
}

export const AddTopicModal = (props: AddTopicModalProps) => {
  const { isActive, setIsActive, forumId, onCreateTopic } = props;
  const [title, setTitle] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  useEffect(() => {
    if (!isActive) setTitle('');
  }, [isActive]);

  const createTopic = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onCreateTopic(forumId, title);
    },
    [onCreateTopic, forumId, title],
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
