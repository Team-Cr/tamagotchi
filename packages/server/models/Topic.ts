/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Forum } from './Forum';
import { Comment } from './Comment';

@Table({ tableName: 'topics' })
export class Topic extends Model {
  @Column(DataType.STRING)
  title!: string;

  @ForeignKey(() => Forum)
  @Column(DataType.INTEGER)
  forumId!: number;

  @BelongsTo(() => Forum)
  forum!: Forum;

  @HasMany(() => Comment)
  comments!: Comment[];
}
