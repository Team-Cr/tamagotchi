/* eslint-disable @typescript-eslint/no-unused-vars */
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'characters' })
export class Character extends Model {
  @Column(DataType.INTEGER)
  experience!: number;

  @Column(DataType.INTEGER)
  hp!: number;

  @Column({
    type: DataType.DATE, // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
    field: 'last_active_time',
  })
  lastActiveTime!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
