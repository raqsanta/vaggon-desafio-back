'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('activity',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        beginsdate: {
          type: DataTypes.DATE
        },
        expiresdate: {
          type: DataTypes.DATE
        },
        status: {
          type: DataTypes.ENUM('Pending', 'Published', 'Cancelled')
        },
        author_id: {
          type: DataTypes.UUID
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
    await queryInterface.dropTable('activity')
  }
};
