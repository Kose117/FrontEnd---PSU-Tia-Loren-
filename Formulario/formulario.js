const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const calendar = document.querySelectorAll('#formulario input[type="date"]');

const expresiones = {
    // usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    // password: /^.{4,12}$/, // 4 a 12 dígitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    identificacion: /^\d{7,10}$/,
    direccion: /^.{1,40}$/
}

const campos = {
    nrodocumento: false,
    nombre: false,
    fecha_nacimiento: false,
    celular: false,
    direccion: false,
    correo: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "numero_documento":
            validarCampo(expresiones.identificacion, e.target, 'nrodocumento');
            break;
        case "nombre_titular":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "fecha_nacimiento":
            validarFechaNacimiento(e.target);
            break;
        case "celular_titular":
            validarCampo(expresiones.telefono, e.target, 'celular');
            break;
        case "direccion_titular":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "correo_titular":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        const icono = document.querySelector(`#grupo__${campo} .formulario__validacion-estado`);
        icono.outerHTML = '<i class="formulario__validacion-estado material-symbols-outlined">check_circle</i>';
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        const icono = document.querySelector(`#grupo__${campo} .formulario__validacion-estado`);
        icono.outerHTML = '<i class="formulario__validacion-estado material-symbols-outlined">cancel</i>';
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarFechaNacimiento = (input) => {
    const fechaIngresada = new Date(input.value);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Asegura que la comparación se haga solo con la fecha, sin considerar la hora.

    // Calcula la edad de la persona
    let edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
    const mes = fechaActual.getMonth() - fechaIngresada.getMonth();

    // Ajusta la edad si el mes actual es menor al mes de nacimiento o si es el mismo mes pero el día aún no ha llegado
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaIngresada.getDate())) {
        edad--;
    }

    // Verifica si la persona tiene al menos 18 años
    if (edad >= 18) {
        document.getElementById(`grupo__fechanacimiento`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__fechanacimiento`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__fechanacimiento .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['fecha_nacimiento'] = true;
    } else {
        document.getElementById(`grupo__fechanacimiento`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__fechanacimiento`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__fechanacimiento .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['fecha_nacimiento'] = false;
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

selects.forEach((select) => {
    select.addEventListener('change', () => {
        validarSelects();
    });
});

calendar.forEach((calendar) => {
    calendar.addEventListener('change', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nrodocumento && campos.nombre && campos.celular && campos.direccion && campos.correo && campos.fecha_nacimiento) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        const mensajeError = document.getElementById('formulario__mensaje');
        mensajeError.classList.add('formulario__mensaje-activo');

        // Agregar timeout para esconder el mensaje de error
        setTimeout(() => {
            mensajeError.classList.remove('formulario__mensaje-activo');
        }, 3000);
    }
});

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Aquí puedes realizar validaciones adicionales si es necesario
    // Ejemplo de validación simple
    const esValido = true; // Cambia esta lógica según tu validación

    if (esValido) {
        // Si las validaciones pasan, redirigir a otra página
        window.location.href = 'registro-adicional.html'; // Redirige a la página deseada
    } else {
        // Mostrar mensajes de error si las validaciones no pasan
        alert('Por favor, complete todos los campos correctamente.');
    }
});

