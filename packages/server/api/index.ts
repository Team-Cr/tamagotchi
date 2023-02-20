import { Router } from 'express';
import { ForumAPI } from './forum';
import { ThemeAPI } from './theme';
import { TopicAPI } from './topic';

const ApiRouter = Router();

ApiRouter.use('/forum', ForumAPI);
ApiRouter.use('/topic', TopicAPI);
ApiRouter.use('/theme', ThemeAPI);
// ApiRouter.use('/comment', CommentAPI);

export { ApiRouter };
