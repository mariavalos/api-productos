const mysql = require('mysql2/promise') //accediendo modulo de conexion
const { db } = require('./env')//leer y validar los parametros de conexion

//este archivo gestiona la conexion al server y a la BD
const pool = mysql.createPool({
  host: db.host,
  port: db.port,
  user: db.user,
  password: db.password,
  database: db.database,
  waitForConnections:true,
  connectionLimit:db.connectionLimit,
  queueLimit: 0
})

//verificar la conexion
const probarConexion = async() => {
  const conexion = await pool.getConnection()
  await conexion.ping()//test
  conexion.release()//desconexion
}

//exportar la conexion
module.exports = {pool, probarConexion }