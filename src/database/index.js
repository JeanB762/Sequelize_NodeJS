import Sequelize from 'sequelize';

import User from '../models/User';

import dbConfig from '../config/database';

const connection = new Sequelize(dbConfig);

User.init(connection);

export default connection;
