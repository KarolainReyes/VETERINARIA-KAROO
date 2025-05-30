alert("Bienvenido a la veterinaria de mascotas");
let duenos = [];
let contador = 1;
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
    let ccDueno = prompt("Ingresa su número de cédula:");
    let telefonoDueno = prompt("Ingresa el teléfono del dueño:");
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


function VerMascotasDueño() {
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
    alert("Su ID de mascota es: ");
    let nombreMascota = prompt("Ingresa el nombre de la mascota:");
    let especieMascota = prompt("Ingresa la especie de la mascota:");
    let edadMascota = parseInt(prompt("Ingresa la edad de la mascota:"));
    let pesoMascota = prompt("Ingresa el peso de la mascota:");
    let estadoMascota = prompt("Ingresa el estado de salud de la mascota:");
    let ccDueño = alert("El dueño de la mascota es: ");

    // Validación de campos
    if (!nombreMascota || !especieMascota || isNaN(edadMascota) || !pesoMascota || !estadoMascota) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    // Validación de datos
    if (edadMascota < 0 || pesoMascota < 0) {
        alert("La edad y el peso deben ser números positivos.");
        return;
    
    }
    if (estadoMascota.toLowerCase() !== "saludable" && estadoMascota.toLowerCase() !== "enfermo") {
        alert("El estado de salud debe ser 'saludable' o 'enfermo'.");
        return;
    }
    // Crear un objeto mascota y agregarlo al array
    if (mascotas.some(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase())) {
        alert("Ya existe una mascota con ese nombre.");
        return;
    }
    if (mascotas.some(mascota => mascota.especie.toLowerCase() === especieMascota.toLowerCase())) {
        alert("Ya existe una mascota de esa especie.");
        return;
    }

    let nuevaMascota = {
        nombre: nombreMascota,
        especie: especieMascota,
        edad: edadMascota,
        peso: pesoMascota,
        estado: estadoMascota
    };

    mascotas.push(nuevaMascota);
    alert("¡Mascota agregada exitosamente!");
}



mostrarMenu();