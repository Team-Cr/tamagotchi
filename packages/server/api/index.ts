import { Router } from 'express';
import { CharacterAPI } from './character';
import { ForumAPI } from './forum';
import { TopicAPI } from './topic';
import { UserAPI } from './user';

const ApiRouter = Router();

ApiRouter.use('/forum', ForumAPI);
ApiRouter.use('/topic', TopicAPI);
ApiRouter.use('/user', UserAPI);
ApiRouter.use('/character', CharacterAPI);

export { ApiRouter };
