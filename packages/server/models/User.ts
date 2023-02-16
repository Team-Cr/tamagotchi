/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, DataType, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Character } from './Character';
import { Configuration } from './Configuration';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id!: number;

  @HasOne(() => Character)
  character!: Character;

  @HasOne(() => Configuration)
  configuration!: Configuration;
}
