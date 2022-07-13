const Sequelize = require('sequelize')
const config = require('../config/dbconfig')

const database = new Sequelize(config)

module.exports = database