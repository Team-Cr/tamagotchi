/* eslint-disable @typescript-eslint/no-unused-vars */
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';
import { THEME, Theme } from './Theme';

@Table({ tableName: 'configurations' })
export class Configuration extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Theme)
  @Column({
    type: DataType.INTEGER,
    defaultValue: THEME.LIGHT,
  })
  themeId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Theme)
  theme!: Theme;
}
