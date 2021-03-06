const {DataTypes} = require('sequelize')
const database = require('../database/db')

const Activity = database.define('activity', {
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
        type: DataTypes.ENUM('Pending','Published','Cancelled')
    },
    author_id: {
        type: DataTypes.UUID
    }
},{
    timestamps: true
})

module.exports = Activity;