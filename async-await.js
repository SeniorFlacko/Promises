let getNombre = async () => {
    // throw new Error('No existe un nombre para ese usuario'); 
    return 'Cristian'
};

// let getNombre = async () => { 
//     return new Promise( (resolve,reject) => {
//         return resolve('Cristian');
//     });
// };

// console.log(getNombre());

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}


// getNombre()
//     .then( nombre => {
//         console.log(nombre);
//     })
//     .catch(e => console.error('Error de async ', e))

saludo().then(mensaje => {
    console.log(mensaje);
})