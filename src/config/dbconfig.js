require('dotenv/config')

module.exports = {
  "username": process.env.DB_USERNAME || "root",
  "password": process.env.DB_PASSWORD || null,
  "database": process.env.DB_NAME || "vaggondb",
  "host": process.env.DB_HOST || "127.0.0.1",
  "dialect": "mysql",
  "define": {
    "timestamps": true
  }
}