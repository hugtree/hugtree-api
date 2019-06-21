import sequelize from '../db';
import Address, { AddressSchema } from './Address';
import Event, { EventSchema } from './Event';
import User, { UserSchema } from './User';
import EventUser, { EventUserSchema } from './EventUser';

Address.init(AddressSchema, {
  sequelize,
  tableName: 'address'
});

Event.init(EventSchema, {
  sequelize,
  tableName: 'event'
});

Event.hasMany(Address, {
  sourceKey: 'id',
  foreignKey: 'eventId'
});

User.init(UserSchema, {
  sequelize,
  tableName: 'user'
});

EventUser.init(EventUserSchema, {
  sequelize,
  tableName: 'event_user'
});

Event.belongsToMany(User, {
  through: {
    model: EventUser,
    unique: false
  },
  foreignKey: 'eventId',
  as: 'users',
  constraints: false
});

User.belongsToMany(Event, {
  through: {
    model: EventUser,
    unique: false
  },
  foreignKey: 'userId',
  as: 'events',
  constraints: false
});
