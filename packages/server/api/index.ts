import { Router } from 'express';
import { CharacterAPI } from './character';
import { ForumAPI } from './forum';
import { ThemeAPI } from './theme';
import { TopicAPI } from './topic';
import { UserAPI } from './user';

const ApiRouter = Router();

ApiRouter.use('/forum', ForumAPI);
ApiRouter.use('/topic', TopicAPI);
// ApiRouter.use('/comment', CommentAPI);
ApiRouter.use('/user', UserAPI);
ApiRouter.use('/theme', ThemeAPI);
ApiRouter.use('/character', CharacterAPI);

export { ApiRouter };
