document.addEventListener('DOMContentLoaded', () => {
    const btnMenor = document.getElementById('btnMenor');
    const btnMayor = document.getElementById('btnMayor');
    const btnNone = document.getElementById('btnNone');
    const dynamicForm = document.getElementById('dynamicForm');
    const formulario = document.getElementById('formulario');

    let personCount = 0; // Contador de personas registradas

    // Función para manejar el envío del formulario
    function handleFormSubmit(event) {
        event.preventDefault(); // Previene el envío real del formulario

        if (personCount < 5) {
            personCount++;
            alert(`Persona registrada correctamente. Has registrado ${personCount} de 5 personas.`);
            dynamicForm.innerHTML = ''; // Limpia el formulario dinámico para permitir agregar otra persona
            document.body.style.backgroundColor = '#ffffff'; // Restablece el fondo a blanco
            formulario.reset(); // Resetea el formulario
            document.getElementById('title').style.color = '#000000'; // Restablece el color de texto a negro
            document.getElementById('formulario').style.backgroundColor = '#ffffff';
        }

        // Mostrar mensaje de alerta si se alcanza el límite de 5 personas
        if (personCount >= 5) {
            alert('Has alcanzado el límite de 5 personas registradas.');
            btnMenor.disabled = true;
            btnMayor.disabled = true;
            document.getElementById('title').style.color = '#000000';
            document.getElementById('formulario').style.backgroundColor = '#ffffff';
        }
    }

    // Redirigir a index.html cuando se selecciona "No agregar persona"
    btnNone.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Mostrar formulario para menor de edad y cambiar el fondo a amarillo
    btnMenor.addEventListener('click', () => {
        if (personCount < 5) {
            document.body.style.backgroundColor = '#d4ac0d'; // Fondo amarillo
            document.getElementById('title').style.color = '#FFFFFF'; // Color de texto
            document.getElementById('formulario').style.backgroundColor = '#f0f0f0';

            dynamicForm.innerHTML = `
                <!-- Formulario completo para menor de edad -->
                <div class="formulario__grupo" id="grupo__tipodocumento">
                    <label for="tipo_documento" class="formulario__label">Tipo de documento:</label>
                    <select class="formulario__input" id="tipo_documento" name="tipo_documento" required>
                        <option value="" disabled selected>Seleccione</option>
                        <option value="tarjeta_identidad">Tarjeta de identidad - TI</option>
                        <option value="registro_civil">Registro civil</option>
                    </select>
                </div>
                <div class="formulario__grupo" id="grupo__nrodocumento">
                    <label for="numero_documento" class="formulario__label">Número de Documento:</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="numero_documento" name="numero_documento" required
                            placeholder="Ingresar numero de documento">
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">El número de documento debe contener máximo 10 dígitos numéricos y
                        debe escribirse sin puntos ni comas.</p>
                </div>
                <div class="formulario__grupo" id="grupo__nombre">
                    <label for="nombre_titular" class="formulario__label">Nombre:</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="nombre_titular" name="nombre_titular"
                        placeholder="Ingresar nombre" required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">El nombre solo puede contener letras y espacios.</p>
                </div>
                <div class="formulario__grupo" id="grupo__fechanacimiento">
                    <label for="fecha_nacimiento" class="formulario__label">Fecha de Nacimiento:</label>
                    <div class="formulario__grupo-input">
                        <input type="date" class="formulario__input" id="fecha_nacimiento" name="fecha_nacimiento" required>
                    </div>
                    <p class="formulario__input-error">Debe ser mayor de 18 años y la fecha no puede ser posterior a la
                    fecha actual.</p>
                </div>
                <div class="formulario__grupo" id="grupo__sexo">
                    <label for="sexo_titular" class="formulario__label">Sexo:</label>
                    <select id="sexo_titular" class="formulario__input" name="sexo_titular" required>
                        <option value="" disabled selected>Seleccione</option>
                        <option value="mujer">Niña</option>
                        <option value="hombre">Niño</option>
                    </select>
                </div>
                <div class="formulario__grupo" id="grupo__celular">
                    <label for="celular_titular" class="formulario__label">Número Celular:</label>
                    <div class="formulario__grupo-input">
                        <input type="tel" class="formulario__input" id="celular_titular" name="celular_titular"
                            placeholder="Ingresar número de celular" required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">El número de celular debe contener un máximo de 10 dígitos numéricos.
                    </p>
                </div>
                <!-- BOTON DE ENVIAR -->
                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <button type="submit" class="formulario__btn">Enviar</button>
                    <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!
                    </p>
                </div>
            `;

            // Añade el manejador de evento al botón de envío
            formulario.addEventListener('submit', handleFormSubmit);
        } else {
            alert('Ya has alcanzado el límite de 5 personas.');
        }
    });

    // Mostrar formulario para mayor de edad y cambiar el fondo a azul oscuro
    btnMayor.addEventListener('click', () => {
        if (personCount < 5) {
            document.body.style.backgroundColor = '#0b0a4a'; // Fondo azul oscuro
            document.getElementById('title').style.color = '#FFFFFF'; // Color de texto
            document.getElementById('formulario').style.backgroundColor = '#f0f0f0';
            dynamicForm.innerHTML = `
                <!-- Formulario completo para mayor de edad -->
                <div class="formulario__grupo" id="grupo__nombre">
                    <label for="nombre_titular" class="formulario__label">Nombre:</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="nombre_titular" name="nombre_titular"
                        placeholder="Ingresar nombre" required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">El nombre solo puede contener letras y espacios.</p>
                </div>
                <div class="formulario__grupo" id="grupo__fechanacimiento">
                    <label for="fecha_nacimiento" class="formulario__label">Fecha de Nacimiento:</label>
                    <div class="formulario__grupo-input">
                        <input type="date" class="formulario__input" id="fecha_nacimiento" name="fecha_nacimiento" required>
                    </div>
                    <p class="formulario__input-error">Debe ser mayor de 18 años y la fecha no puede ser posterior a la
                    fecha actual.</p>
                </div>
                <div class="formulario__grupo" id="grupo__sexo">
                    <label for="sexo_titular" class="formulario__label">Sexo:</label>
                    <select id="sexo_titular" class="formulario__input" name="sexo_titular" required>
                        <option value="" disabled selected>Seleccione</option>
                        <option value="mujer">Mujer</option>
                        <option value="hombre">Hombre</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div class="formulario__grupo" id="grupo__celular">
                    <label for="celular_titular" class="formulario__label">Número Celular:</label>
                    <div class="formulario__grupo-input">
                        <input type="tel" class="formulario__input" id="celular_titular" name="celular_titular"
                            placeholder="Ingresar número de celular" required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">El número de celular debe contener un máximo de 10 dígitos numéricos.
                    </p>
                </div>
                <div class="formulario__grupo" id="grupo__direccion">
                    <label for="direccion_titular" class="formulario__label">Dirección:</label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="direccion_titular" name="direccion_titular"
                            required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">La dirección debe tener el formato Cra 0 #00-00</p>
                </div>
                <div class="formulario__grupo" id="grupo__correo">
                    <label for="correo_titular" class="formulario__label">Correo:</label>
                    <div class="formulario__grupo-input">
                        <input type="email" class="formulario__input" id="correo_titular" name="correo_titular" required>
                        <i class="formulario__validacion-estado material-symbols-outlined">cancel</i>
                    </div>
                    <p class="formulario__input-error">Ingresa un correo válido.</p>
                </div>
                <!-- BOTON DE ENVIAR -->
                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <button type="submit" class="formulario__btn">Enviar</button>
                    <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!
                    </p>
                </div>
            `;

            // Añade el manejador de evento al botón de envío
            formulario.addEventListener('submit', handleFormSubmit);
        } else {
            alert('Ya has alcanzado el límite de 5 personas.');
        }
    });
});
