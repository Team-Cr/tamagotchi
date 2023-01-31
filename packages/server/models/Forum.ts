import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'forums' })
export class Forum extends Model {
  @Column(DataType.STRING)
  title!: string;
}
