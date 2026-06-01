const mongoose = require('mongoose')
require('dotenv/config')

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB conectado')
  } catch (err) {
    console.error(err)
  }
}

module.exports = conectarDB