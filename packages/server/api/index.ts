import { Router } from 'express';
import { CharacterAPI } from './character';
import { ForumAPI } from './forum';
import { TopicAPI } from './topic';
import { UserAPI } from './user';
import { ConfigurationAPI } from './configuration';

const ApiRouter = Router();

ApiRouter.use('/forum', ForumAPI);
ApiRouter.use('/topic', TopicAPI);
ApiRouter.use('/user', UserAPI);
ApiRouter.use('/character', CharacterAPI);
ApiRouter.use('/configuration', ConfigurationAPI);

export { ApiRouter };
