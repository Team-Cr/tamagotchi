import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAPIInstance } from '../axios';
import { Forum, Topic } from './types/forum';

const FORUM_URL = `forum`;
const TOPIC_URL = `topic`;

export const ForumAPI = {
  getForums: (): AxiosResponse<Forum[]> => axiosAPIInstance.get(FORUM_URL),
  getTopics: (forumId: Forum['id']): AxiosResponse<Topic[]> => {
    return axiosAPIInstance.get(TOPIC_URL, { params: { forumId } });
  },
  createTopic: (
    forumId: Forum['id'],
    payload: Pick<Topic, 'title'>,
  ): AxiosResponse<Pick<Topic, 'id'>> =>
    axiosAPIInstance.post(TOPIC_URL, payload, { params: { forumId } }),
};

// .post('/:forumId/topic', TopicController.create);

// TopicAPI.get('', TopicController.request)
//   .get('/:id', TopicController.find)
//   .delete('/:id')
//   .post('/:topicId/comment', CommentController.create);
