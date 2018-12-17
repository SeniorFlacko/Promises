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


// let getEmpleado = (id) => {
    
//     return new Promise( (resolve,reject) => {
//         let empleadoDB = empleados.find( empleado => empleado.id == id);
    
//         if (!empleadoDB) {
//             reject(`No existe un empleado con el ID ${ id }`);
//         }
//         else{
//             resolve(empleadoDB);
//         }
//     });
// }

let getEmpleado = async (id) => {
    
    let empleadoDB = empleados.find( empleado => empleado.id == id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`);
    }
    else{
        return empleadoDB;
    }
    
}

// let getSalario = (empleado) => {
//     return new Promise( (resolve,reject) => {
//         let empleadoSalarioDB = salarios.find( salario => salario.id === empleado.id );
//         let empleadoDB = empleados.find( empleadoi => empleadoi.id === empleado.id);

//         if (!empleadoSalarioDB) {
//             if (!empleadoDB) {
//                 return reject(`No se encontro el usuario ${ empleado.nombre}`);
//             }
//             else{
//                 return reject(`No se encontro un salario para el usuario ${ empleadoDB.nombre}`);
//             }
//         }else{
//             let usuario = {
//                 nombre: empleadoDB.nombre,
//                 salario: empleadoSalarioDB.salario
//             } 
//             return resolve(usuario);
//         }
//     });
// }

let getSalario = async (empleado) => {
    
    let empleadoSalarioDB = salarios.find( salario => salario.id === empleado.id );
    let empleadoDB = empleados.find( empleadoi => empleadoi.id === empleado.id);

    if (!empleadoSalarioDB) {
        if (!empleadoDB) {
            throw new Error (`No se encontro el usuario ${ empleado.nombre}`);
        }
        else{
            throw new Error (`No se encontro un salario para el usuario ${ empleadoDB.nombre}`);
        }
    }else{
        let usuario = {
            nombre: empleadoDB.nombre,
            salario: empleadoSalarioDB.salario
        } 
        return (usuario);
    }
}

// getEmpleado(3)
//     .then(empleado => {
//         getSalario(empleado)
//             .then(usuario => console.log(usuario))
//             .catch(err => console.error(err))
//     })
//     .catch(err => {
//         console.error(err);
//     });


// getEmpleado(300)
//     .then(empleado => getSalario(empleado))
//     .then(usuario => console.log(usuario))
//     .catch(err => console.error(err));


let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `El salario de ${salario.nombre} es de ${salario.salario}`;
}

getInformacion(3)
    .then(response => console.log(response))
    .catch(err => console.error(err))