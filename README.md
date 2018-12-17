# Promises

Muy Vanilla y Old.
1.- Callbacks: Pasar una funcion callback para determinar un proceso con error o success, mediante un null.

Desde ECMA6
2.- Promesas: Retornar una promesa e invocar a reject o resolve cuando tiene error o exito.

Desventajas : Identacion infinita, o pila de .then() infinitas


Desde ECMA7
3.- Async Await: Implicitamente retornando una promesa e invocar throw Error al tener un error, o solo un return cuando se resuelve correctamente

Ventajas: Mediante el keyword await podemos resolver y obtener el valor de una promesa y dar una sensacion de un proceso sincrono a procesos asincronos asi evitando la identacion infinita ademas de proporcionar un codigo mas claro.


Instrucciones: Descargar y mediante Nodemon ejecutar:

Ejemplo: 
$ nodemon async-await2
