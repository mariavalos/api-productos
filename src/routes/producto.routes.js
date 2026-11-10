const { Router } = require('express') //Manejador de rutas
const controller = require('../controllers/producto.controller') //Controlador (Lógica)

const router = Router() //Considerar los verbo

router.get('/', controller.listarProductos)
router.get('/:id', controller.obtenerProducto)

//pendiente ... put, post, delete

module.exports = router