export interface Forum {
  id: number;
  title: string;
}

export interface Topic {
  id: number;
  title: string;
  forumId: number;
}
