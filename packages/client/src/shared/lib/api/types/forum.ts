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
