require('dotenv/config')
const express = require('express')
const cors = require('cors')
const router = require('./routes/producto.js')
const conectarDB = require('./config/db.js')

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3000
app.use('/api/productos', router)

if (require.main === module) {
  conectarDB()
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))
}

module.exports = app
