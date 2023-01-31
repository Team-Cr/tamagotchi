/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';
import { Topic } from './Topic';

@Table({ tableName: 'comments' })
export class Comment extends Model {
  @Column(DataType.STRING)
  text!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @ForeignKey(() => Topic)
  @Column({
    type: DataType.INTEGER,
    field: 'topic_id',
  })
  topicId!: number;

  @ForeignKey(() => Comment)
  @AllowNull
  @Column({
    type: DataType.INTEGER,
    field: 'comment_id',
  })
  commentId!: number;

  @BelongsTo(() => Topic)
  topic!: Topic;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Comment)
  comment!: Comment;
}
