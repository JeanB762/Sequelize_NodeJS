import Sequelize, { Model } from 'sequelize';

class Tech extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: 'user_id',
      through: 'user_techs',
      as: 'users',
    });
  }
}

export default Tech;
