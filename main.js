alert("Bienvenido a la veterinaria de mascotas");
let duenos = [];
let contador = 1;
let contmascota = 1;
let mascotas = [];

function mostrarMenu() {
    let opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Registrar un nuevo dueño\n" +
        "2. Registrar una nueva mascota\n" +
        "3. Listar todas las mascotas\n" +
        "4. Buscar una mascota por nombre\n" +
        "5. Actualizar el estado de salud de una mascota\n" +
        "6. Eliminar una mascota por nombre\n" +
        "7. Ver mascotas de un dueño\n" +
        "8. Salir"
    );


    switch (opcion) {
        case "1":
            agregarDueno(mostrarMenu);
            break;
        case "2":
            alert("Registrar una nueva mascota.");
            agregarMascota(mostrarMenu);
            break;
        case "3":
            alert("Listar todas las mascotas.");
            mostrarMascotas(mostrarMenu);

            break;
        case "4":
            alert("Buscar una mascota por nombre.");
            buscarMascotaPorNombre(mostrarMenu);
            break;
        case "5":
            alert("Actualizar el estado de salud de una mascota.");
            actualizarEstadoSalud(mostrarMenu);
            break;
        case "6":
            alert("Eliminar una mascota por nombre.");
            eliminarMascota(mostrarMenu);
            break;
        case "7":
            alert("Ver mascotas de un dueño.");
            VerMascotasDueno();
            break;
        case "8":
            alert("Gracias por visitar la veterinaria. ¡Hasta luego!");
            salir = true;
            break;
        default:
            alert("Opción no válida, por favor intenta de nuevo.");
    }
}

//Funciones para manejar los dueños
function agregarDueno(callback = () => { }) {
    alert("Registro de nuevo dueño.");
    let idDueno = generarId();
    alert("Su ID de dueño es: " + idDueno);
    let nombreDueno = prompt("Ingrese su nombre:");
    let ccDueno = Number(prompt("Ingresa su número de cédula:"));
    while(isNaN(ccDueno)) {
        alert("Por favor, ingresa un número de cédula válido.");
        ccDueno = Number(prompt("Ingresa su número de cédula:"));
    }
    alert("Regirtro exitoso!");
    let telefonoDueno = Number(prompt("Ingresa el teléfono del dueño:"));
    while(isNaN(telefonoDueno)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        telefonoDueno = Number(prompt("Ingresa el teléfono del dueño:"));
    }
    alert("Registro exitoso!");
    let correoDueno = prompt("Su correo electrónico:");

    let nuevoDueno = {
        id: idDueno,
        nombre: nombreDueno,
        cedula: ccDueno,
        telefono: telefonoDueno,
        correo: correoDueno,
    };
    console.log(nuevoDueno);

    setTimeout(function () {
        duenos.push(nuevoDueno);
        console.log("!Dueño agregado exitosamente!");
        alert("¡Dueño agregado exitosamente!");
        callback();
    }, 1500);
    console.log("Guardando dueño en la base de datos...");
}


function generarId() {
    return contador++;
}

function idmascota() {
    return contmascota++;
}

function VerMascotasDueno() {
    let ccDueno = prompt("Ingresa el número de cédula del dueño para ver sus mascotas:");
    if (!ccDueno) {
        alert("Por favor, ingresa un número de cédula válido.");
        return;
    }
    let mascotasDueno = mascotas.filter(mascota => mascota.ccDueño === ccDueno);
    if (mascotasDueno.length > 0) {
        let mensaje = `Mascotas del dueño con cédula ${ccDueno}:\n`;
        mascotasDueno.forEach((mascota, index) => {
            mensaje += `${index + 1}. Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado: ${mascota.estado}\n`;
        });
        alert(mensaje);
    } else {
        alert("No se encontraron mascotas para el dueño con esa cédula.");
    }
};

// Funciones para manejar las mascotas

function agregarMascota() {
    let idMascota = idmascota();
    alert("Su ID de mascota es: " + idMascota);
    cedulaExistente = duenos.some(dueno => dueno.cedula === cedula);
    let cedula = prompt("Ingresa el número de cédula del dueño de la mascota:");
    let nombreMascota = prompt("Ingresa el nombre de la mascota:");
    let especieMascota = prompt("Ingresa la especie de la mascota:");
    let edadMascota = parseInt(prompt("Ingresa la edad de la mascota:"));
    let pesoMascota = parseFloat (prompt("Ingresa el peso de la mascota:"));
    let estadoMascota = prompt("Ingresa el estado de salud de la mascota:");

    if (!cedulaExistente) {
        alert("No se encontró un dueño con esa cédula. Por favor, regístralo primero.");
        return;
    }


    let nuevaMascota = {
        id: idMascota,
        nombre: nombreMascota,
        especie: especieMascota,
        edad: edadMascota,
        peso: pesoMascota,
        estado: estadoMascota,
        cedula: ccDueno
    };

    mascotas.push(nuevaMascota);
    alert("¡Mascota agregada exitosamente!");
}

function mostrarMascotas() {                                
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas.");
        return;
    }
    
    let mensaje = "Lista de mascotas:\n";
    mascotas.forEach((mascota, index) => {
        mensaje += `${index + 1}. Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, Edad: ${mascota.edad}, Peso: ${mascota.peso}, Estado: ${mascota.estado}\n`;
    });
    
    alert(mensaje);
}

function buscarMascotaPorNombre() {
    let nombreMascota = prompt("Ingresa el nombre de la mascota que deseas buscar:");
    
    if (!nombreMascota) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    let mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
    
    if (mascotaEncontrada) {
        alert(`Mascota encontrada: Nombre: ${mascotaEncontrada.nombre}, Especie: ${mascotaEncontrada.especie}, Edad: ${mascotaEncontrada.edad}, Peso: ${mascotaEncontrada.peso}, Estado: ${mascotaEncontrada.estado}`);
    } else {
        alert("No se encontró ninguna mascota con ese nombre.");
    }
}

function actualizarEstadoSalud() {
    let nombreMascota = prompt("Ingresa el nombre de la mascota cuyo estado de salud deseas actualizar:");
    
    if (!nombreMascota) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    let mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());
    
    if (mascotaEncontrada) {
        let nuevoEstado = prompt("Ingresa el nuevo estado de salud (saludable/enfermo):");
        
        if (nuevoEstado.toLowerCase() === "saludable" || nuevoEstado.toLowerCase() === "enfermo") {
            mascotaEncontrada.estado = nuevoEstado;
            alert("Estado de salud actualizado exitosamente.");
        } else {
            alert("El estado de salud debe ser 'saludable' o 'enfermo'.");
        }
    } else {
        alert("No se encontró ninguna mascota con ese nombre.");
    }
}

function eliminarMascota() {
    if (mascotas.length === 0) {
        alert("No hay mascotas registradas para eliminar.");
        return;
    }
    
    let indice = parseInt(prompt("Ingresa el número de la mascota que deseas eliminar (1 a " + mascotas.length + "):")) - 1;
    
    if (indice >= 0 && indice < mascotas.length) {
        mascotas.splice(indice, 1);
        alert("¡Mascota eliminada exitosamente!");
    } else {
        alert("Número de mascota inválido.");}
    }

mostrarMenu();