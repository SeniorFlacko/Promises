
// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);


let getUsuariobyId = (id, callback) => {

    let usuario = {
        nombre: 'Cristian',
        id
    }
    
    if (id === 20) {
        callback(`Usuario con id ${ id }, no existe en la BD`);
    }
    else{
        callback(null,usuario);
    }

}


getUsuariobyId(1, (err,usuario) => {

    if (err) {
        return console.error(err);
    }
    console.log('Usuario de base de datos ', usuario);
});