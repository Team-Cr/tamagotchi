export interface Forum {
  id: number;
  title: string;

  topics?: Topic[];
}

export interface Topic {
  id: number;
  title: string;
  forumId: number;
}

export interface Comment {
  id: number;
  userId: number;
  topicId: number;
  commentId?: number;
  text: string;
  createdAt: string;
  updatedAt: string;
}
