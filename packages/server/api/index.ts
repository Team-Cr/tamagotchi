import { Router } from 'express';
import { checkAuthMiddleware } from '../middlewares';
import { CharacterAPI } from './character';
import { ForumAPI } from './forum';
import { TopicAPI } from './topic';
import { UserAPI } from './user';
import { ConfigurationAPI } from './configuration';

const ApiRouter = Router();

ApiRouter.use('/forum', checkAuthMiddleware, ForumAPI);
ApiRouter.use('/topic', checkAuthMiddleware, TopicAPI);
ApiRouter.use('/user', UserAPI);
ApiRouter.use('/character', CharacterAPI);
ApiRouter.use('/configuration', ConfigurationAPI);

export { ApiRouter };
