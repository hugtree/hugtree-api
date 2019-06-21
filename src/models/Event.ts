import {
  Association,
  Model,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyHasAssociationMixin
} from 'sequelize';
import sequelize from '../db';
import User from './User';
import Address from './Address';
import EventUser from './EventUser';

export default class Event extends Model {
  public id!: number;
  public name!: string;
  public description!: string;

  // public getUsers!: HasManyGetAssociationsMixin<User>;
  // public addUser!: HasManyAddAssociationMixin<User, number>;
  // public hasUser!: HasManyHasAssociationMixin<User, number>;
  // public countUsers!: HasManyCountAssociationsMixin;

  // public readonly address?: Address;
  // // public readonly users?: User[];

  // public static associations: {
  //   address: Association<Event, Address>;
  //   // users: Association<Event, User>;
  // };
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const EventSchema = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: false
  }
};
