let saludar = (nombre) => {
    let mensaje = `Hola : ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Cristian');
console.log(saludo);


// console.log('Inicio del programa');

// //TimeOut es Non Blocking
// setTimeout(() => {
//     console.log('Primer Timeout');
// }, 3000);

// setTimeout(() => {
//     console.log('Segundo Timeout');
// }, 0);

// setTimeout(() => {
//     console.log('Tercer Timeout');
// }, 0);

// console.log('Fin del programa');
