# proyecto-final-nodejs-mfjc

Las variables de la base de datos, esta configurado sobre un hosting free de postgres

PASO 1:
clonar el proyecto
PASO 2:
Ingresar a la carpeta clonada
PASO 3:
en la terminal digitar: npm install
PASO 4:
validar las API solicitados


http://localhost:3001/api/login

http://localhost:3001/api/profile

API USUARIOS

POST
http://localhost:3001/api/usuarios

{
    "nombre" : "diego perez",
    "correo" : "diego.perez@txt.com",
    "contrasena" : "diego123"
}
GET
http://localhost:3001/api/usuarios
PUT
http://localhost:3001/api/usuarios/2

API CATEGORIAS
GET
http://localhost:3001/api/categorias
POST
http://localhost:3001/api/categorias
{
    "nombre" : "cat100",
    "usuarioId" : 1
}
PUT
http://localhost:3001/api/categorias/1

API PRODUCTOS
GET
http://localhost:3001/api/productos
POST
http://localhost:3001/api/productos
{
    "nombre" : "p100",
    "precio_unitario" : 10,
    "categoriaId" : 1,
    "usuarioId" : 2
}
PUT
http://localhost:3001/api/productos/1
