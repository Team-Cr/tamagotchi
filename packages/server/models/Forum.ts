/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Topic } from './Topic';

@Table({ tableName: 'forums' })
export class Forum extends Model {
  @Column(DataType.STRING)
  title!: string;

  @HasMany(() => Topic)
  topics!: Topic[];
}
