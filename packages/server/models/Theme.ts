/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum THEME {
  LIGHT = 1,
  DARK = 2,
}

@Table({ tableName: 'themes' })
export class Theme extends Model {
  @Column(DataType.STRING)
  name!: string;
}
