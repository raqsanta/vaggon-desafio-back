'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        createdat: {
          type: DataTypes.DATE
        },
        updatedat: {
          type: DataTypes.DATE
        }
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
};
