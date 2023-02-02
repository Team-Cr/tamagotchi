import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAPIInstance } from '../axios';
import { Forum, Topic } from './types/forum';

const FORUM_URL = `forum`;
const TOPIC_URL = `topic`;

export const ForumAPI = {
  getForums: (): AxiosResponse<Forum[]> => axiosAPIInstance.get(FORUM_URL),
  getForum: (forumId: number): AxiosResponse<Forum> => {
    return axiosAPIInstance.get(`${FORUM_URL}/${forumId}`);
  },
  createTopic: (
    forumId: Forum['id'],
    payload: Pick<Topic, 'title'>,
  ): AxiosResponse<Pick<Topic, 'id'>> =>
    axiosAPIInstance.post(`${FORUM_URL}/${forumId}/${TOPIC_URL}`, payload),
};

// .post('/:forumId/topic', TopicController.create);

// TopicAPI.get('', TopicController.request)
//   .get('/:id', TopicController.find)
//   .delete('/:id')
//   .post('/:topicId/comment', CommentController.create);
