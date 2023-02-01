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
import { Comment } from './Comment';
import { Forum } from './Forum';

@Table({ tableName: 'topics' })
export class Topic extends Model {
  @Column(DataType.STRING)
  title!: string;

  @ForeignKey(() => Forum)
  @Column(DataType.INTEGER)
  forum_id!: number;

  @BelongsTo(() => Forum)
  forum!: Forum;

  @HasMany(() => Comment)
  comments!: Comment[];
}
