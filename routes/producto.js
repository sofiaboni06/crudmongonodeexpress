const express = require('express')
const router = express.Router()
const producto = require('../controllers/producto.js')

router.post('/', producto.crearProducto)
router.get('/', producto.obtenerProductos)
router.get('/:id', producto.obtenerProducto)
router.put('/:id', producto.actualizarProducto)
router.delete('/:id', producto.eliminarProducto)

module.exports = router
