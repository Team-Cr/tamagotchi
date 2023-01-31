import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';

@Table({ tableName: 'forums' })
export class Character extends Model {
  @Column(DataType.INTEGER)
  experience!: number;

  @Column(DataType.INTEGER)
  hp!: number;

  @Column(DataType.DATE) // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
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
