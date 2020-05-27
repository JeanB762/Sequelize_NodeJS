import Sequelize from 'sequelize';

import User from '../models/User';
import Address from '../models/Address';
import Tech from '../models/Tech';

import dbConfig from '../config/database';

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

export default connection;
