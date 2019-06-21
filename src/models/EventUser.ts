import { Model, DataTypes } from 'sequelize';

export default class EventUser extends Model {
  public isOrganizer!: boolean;
  public userId!: number;
  public eventId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const EventUserSchema = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  isOrganizer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
};
