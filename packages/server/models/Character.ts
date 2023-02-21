/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'characters' })
export class Character extends Model {
  @Default(0)
  @Column(DataType.INTEGER)
  experience!: number;

  @Default(50)
  @Column(DataType.INTEGER)
  hp!: number;

  @Column(DataType.DATE)
  lastActiveTime!: Date;

  @Default(false)
  @Column(DataType.BOOLEAN)
  hasSeenTutorial!: boolean;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
