import { Router } from 'express';
import { CommentAPI } from './comment';
import { ForumAPI } from './forum';
import { TopicAPI } from './topic';
import { UserAPI } from './user';

const ApiRouter = Router();

ApiRouter.use('/forum', ForumAPI);
ApiRouter.use('/topic', TopicAPI);
ApiRouter.use('/comment', CommentAPI);
ApiRouter.use('/user', UserAPI);

export { ApiRouter };
