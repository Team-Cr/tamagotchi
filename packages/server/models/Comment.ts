/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Length,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';
import { Topic } from './Topic';

@Table({ tableName: 'comments' })
export class Comment extends Model {
  @Length({ min: 5, max: 255 })
  @Column(DataType.STRING)
  text!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topicId!: number;

  @ForeignKey(() => Comment)
  @AllowNull
  @Default(null)
  @Column(DataType.INTEGER)
  commentId!: number;

  @BelongsTo(() => Topic)
  topic!: Topic;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Comment)
  comment!: Comment;
}
