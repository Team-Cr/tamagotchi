import { AxiosResponse } from '@/shared/lib/api/types/axios';
import { axiosAppInstance } from '../axios';
import { Comment, Forum, Topic } from './types/forum';

const FORUM_URL = `forum`;
const TOPIC_URL = `topic`;
const COMMENT_URL = `comment`;

export const ForumAPI = {
  getForums: (): AxiosResponse<Forum[]> => axiosAppInstance.get(FORUM_URL),
  getForum: (forumId: number): AxiosResponse<Forum> => {
    return axiosAppInstance.get(`${FORUM_URL}/${forumId}`);
  },
  createTopic: (
    forumId: Forum['id'],
    payload: Pick<Topic, 'title'>,
  ): AxiosResponse<Pick<Topic, 'id'>> =>
    axiosAppInstance.post(`${FORUM_URL}/${forumId}/${TOPIC_URL}`, payload),
  getComments: (topicId: number): AxiosResponse<Comment[]> =>
    axiosAppInstance.get(`${COMMENT_URL}/${topicId}`),
  createComment: (
    topicId: number,
    payload: Omit<Comment, 'id' | 'topicId' | 'createdAt' | 'updatedAt'>,
  ): AxiosResponse<Pick<Comment, 'id'>> =>
    axiosAppInstance.post(`${TOPIC_URL}/${topicId}/${COMMENT_URL}/`, payload),
};

// .post('/:forumId/topic', TopicController.create);

// TopicAPI.get('', TopicController.request)
//   .get('/:id', TopicController.find)
//   .delete('/:id')
//   .post('/:topicId/comment', CommentController.create);
