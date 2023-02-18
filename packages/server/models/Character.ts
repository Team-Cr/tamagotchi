/* eslint-disable @typescript-eslint/no-unused-vars */
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'characters' })
export class Character extends Model {
  @Column(DataType.INTEGER)
  experience!: number;

  @Column(DataType.INTEGER)
  hp!: number;

  @Column(DataType.DATE)
  lastActiveTime!: Date;

  @Column(DataType.BOOLEAN)
  hasSeenTutorial!: boolean;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
