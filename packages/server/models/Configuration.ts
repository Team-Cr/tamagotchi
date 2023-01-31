import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './User';
import { Theme } from './Theme';

@Table({ tableName: 'configurations' })
export class Configuration extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @ForeignKey(() => Theme)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
  })
  themeId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Theme)
  theme!: Theme;
}
