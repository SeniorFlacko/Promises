let empleados = [
    {
        id:1,
        nombre: 'Cristian'
    },
    {
        id:2,
        nombre: 'Jesus'
    },
    {
        id:3,
        nombre: 'Brandon'
    },
];


let salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    }
]

let getEmpleado = (id,callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id == id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`)
    }
    else{
        callback(null, empleadoDB);
    }
}


// getEmpleado(20 , (err, empleado) => {

//     if(err){
//         return console.error(err);
//     }
//     console.log(empleado);
// })


let getSalario = (empleado,callback) => {
    let empleadoSalarioDB = salarios.find( salario => salario.id === empleado.id );
    let empleadoDB = empleados.find( empleadoi => empleadoi.id === empleado.id);

    if (!empleadoSalarioDB) {
        if (!empleadoDB) {
            return callback(`No se encontro el usuario ${ empleado.nombre}`);
        }
        else{
            return callback(`No se encontro un salario para el usuario ${ empleadoDB.nombre}`);
        }
    }else{
        let usuario = {
            nombre: empleadoDB.nombre,
            salario: empleadoSalarioDB.salario
        } 
        return callback(null, usuario);
    }
}

getEmpleado(3 , (err, empleado) => {

    if(err){
        return console.error(err);
    }

    getSalario( empleado, (err, usuario) => {
        if (err) {
            return console.error(err);
        }
    
        console.log(usuario);
    });
})
