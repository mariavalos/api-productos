//Este archivo contiene la lógica de la aplicación
//5 procedimientos: buscar, listar, registrar, actualizar, eliminar

//PASO 1
//const objeto = require('') //TODOS LAS FUNCIONES
//const { otroObjeto } = require('') //SOLO ALGUNAS FUNCIONES

const { pool } = require('../config/database')
const CAMPOS = 'id, marca, descripcion, precio, stock' //Dato común

//Todas las funciones serán ASÍNCRONAS (tardarán un tiempo en ser resueltas...)
//milisegundos, segundos (1000 = 1seg)
//Todas las funciones reciben y envian datos (pasarelas)
const listarProductos = async() => {}

const obtenerProducto = async() => {}

const crearProducto = async() => {}

const actualizarProducto = async() => {}

const eliminarProducto = async() => {}

//Todos los métodos deben ser EXPORTADOS (se utilizarán desde la app)
//el que lo utilizaré será "routes"
module.exports = {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
}