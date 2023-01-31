import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}
