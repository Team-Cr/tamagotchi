/* eslint-disable @typescript-eslint/no-unused-vars */
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';
import { Theme } from './Theme';

@Table({ tableName: 'configurations' })
export class Configuration extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Theme)
  @Column(DataType.INTEGER)
  themeId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Theme)
  theme!: Theme;
}
