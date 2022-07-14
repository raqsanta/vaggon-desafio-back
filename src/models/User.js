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
        unique: true,
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

User.prototype.compare = async function(password){

    const compared = await bcrypt.compare(password, this.password)

    return compared
}

module.exports = User