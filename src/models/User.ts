import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public mobile!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const UserSchema = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false
  },
  mobile: {
    type: new DataTypes.STRING(128),
    allowNull: false
  }
};
