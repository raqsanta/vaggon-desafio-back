const {DataTypes} = require('sequelize')
const database = require('../database/db')
const bcrypt = require('bcrypt')

const User = database.define('User', {
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
    }
},{
    timestamps: true
})

User.genHash = function (password){
    return bcrypt.hash(password, bcrypt.genSaltSync(8))
}

User.compare = function(password){
    return bcrypt.compare(password, this.password)
}

module.exports = User