# API REST
## Sistema para compartir datos de tienda Perú

**Requerimiento**
1. Instalación NodeJS (v20 o superior)
2. Acceso a Internet (instalar dependencias)
3. Clone el repositorio, y ejecute ```npm install```
4. Requerimiento el archivo ```.env```

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=tiendaperu
DB_CONNECTION_LIMIT=10
```
5. Necesitamos la tabla _productos_

```sql
CREATE TABLE IF NOT EXISTS productos
(
	id 			INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca		VARCHAR(100) 	NOT NULL,
    descripcion VARCHAR(200) 	NOT NULL,
    precio 		DECIMAL(10,2)	NOT NULL,
    stock 		INT UNSIGNED 	NOT NULL DEFAULT 0,
    create_at	DATETIME 		NOT NULL DEFAULT NOW(),
    update_at	DATETIME 		NULL
)ENGINE = INNODB;
```
6. Ejecutar el proyecto escribiendo: ```node src/server```
7. Utilice **Postman** o cualquier software similar ´para realizar el TEST
[Descargar Postman](https://www.postman.com/product/api-client/⁠)