# 🐾 Veterinaria de Karo

Bienvenido al proyecto **Veterinaria de Karo**, una aplicación sencilla desarrollada en JavaScript para gestionar la información de dueños y mascotas en una clínica veterinaria. Este sistema funciona completamente en el navegador, utilizando ventanas emergentes (`prompt`, `alert`) para la interacción con el usuario.

## 📌 Descripción del Proyecto

El sistema permite registrar dueños y sus respectivas mascotas, consultar, modificar y eliminar información relacionada, todo a través de un menú interactivo. Está pensado como una simulación educativa de un sistema de gestión de datos en una veterinaria.

### Funcionalidades principales:

- Registrar nuevos dueños y generar un ID único automáticamente.
- Registrar mascotas asociadas a un dueño existente por su número de cédula.
- Ver todas las mascotas registradas.
- Buscar una mascota por su nombre.
- Actualizar el estado de salud de una mascota.
- Eliminar mascotas.
- Ver todas las mascotas asociadas a un dueño específico.

## 🛠️ Tecnologías utilizadas

- **JavaScript (Vanilla)**: Lógica principal de la aplicación.
- **HTML + navegador**: Aunque no se usa HTML explícito, el entorno de ejecución es el navegador, usando `alert` y `prompt`.
  
## ⚙️ Estructura de Datos

Se utilizan arrays para almacenar temporalmente los datos en memoria:

- `duenos[]`: contiene objetos con los datos de cada dueño (id, nombre, cédula, teléfono, correo).
- `mascotas[]`: contiene objetos con los datos de cada mascota (id, nombre, especie, edad, peso, estado de salud, y cédula del dueño).

## ⏳ Aplicación de la Asincronía

Aunque no se realiza ninguna petición a servidores o archivos externos, se implementa **asincronía simulada** utilizando `setTimeout` al registrar un nuevo dueño. Esto emula el comportamiento de una operación que podría tomar tiempo en un entorno real, como una llamada a una base de datos o un API. Por ejemplo:

```js
setTimeout(function () {
    duenos.push(nuevoDueno);
    alert("¡Dueño agregado exitosamente!");
    callback();
}, 1500);
```

Esta estructura permite que otras acciones puedan realizarse después del tiempo de espera, demostrando cómo se puede trabajar con callbacks y asincronía en JavaScript.

## 🚀 Cómo usar el sistema

1. Abre el archivo en tu navegador (puede estar dentro de una etiqueta `<script>` en un HTML vacío o ejecutarse en la consola del navegador).
2. Sigue las instrucciones del menú para registrar dueños, mascotas y realizar las operaciones disponibles.
3. Usa la consola para ver datos detallados si es necesario (`console.log` está integrado en algunas funciones).

## 🧑‍💻 Autor

Proyecto desarrollado como práctica educativa para fortalecer conceptos de programación estructurada, asincronía y manejo de datos en JavaScript.
