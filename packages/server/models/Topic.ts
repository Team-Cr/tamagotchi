import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Forum } from './Forum';

@Table({ tableName: 'topics' })
export class Topic extends Model {
  @Column(DataType.STRING)
  title!: string;

  @ForeignKey(() => Forum)
  @Column({
    type: DataType.INTEGER,
    field: 'forum_id',
  })
  forumId!: number;

  @BelongsTo(() => Forum)
  forum!: Forum;
}
