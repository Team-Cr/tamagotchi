import { Column, DataType, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Character } from './Character';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @HasOne(() => Character)
  character!: Character;
}
