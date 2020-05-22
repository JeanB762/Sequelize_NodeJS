module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'sequelize',
  database: 'sequelizeDB',
  define: {
    timestamps: true,
    underscored: true,
  },
};
