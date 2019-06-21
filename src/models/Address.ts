import { Model, DataTypes } from 'sequelize';

export default class Address extends Model {
  public country!: string;
  public province!: string;
  public city!: string;
  public address1!: string;
  public address2!: string;
  public url!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const AddressSchema = {
  country: {
    type: new DataTypes.STRING(128),
    allowNull: true
  },
  province: {
    type: new DataTypes.STRING(128),
    allowNull: true
  },
  city: {
    type: new DataTypes.STRING(128),
    allowNull: true
  },
  address1: {
    type: new DataTypes.STRING(128),
    allowNull: true
  },
  address2: {
    type: new DataTypes.STRING(128),
    allowNull: true
  },
  url: {
    type: new DataTypes.STRING(256),
    allowNull: true
  }
};
