const contactoForm = document.getElementById("contactoForm");

function mostrarContactoForm(){
    const divContactoForm = document.createElement("div");
    divContactoForm.innerHTML = `<h1 class="titulo">Tienes alguna pregunta sobre lo que ofrecemos ? No dudes en contactarnos!</h1>
                                <form id="formContacto" action="">
                                    <fieldset class="contacto">
                                        <legend class="legend">Contacto</legend>
                                        <div class="mb-5">
                                            <label for="nombreContacto" class="form-label">Nombre Completo</label>
                                            <input type="text" class="form-control" id="nombreContacto">
                                        </div>
                                        <div class="mb-5">
                                            <label for="emailContacto" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="emailContacto" placeholder="name@example.com">
                                        </div>
                                        <div class="mb-5">
                                            <label for="Textarea1" class="form-label">Escribe aqui tus dudas o sugerencias.</label>
                                            <textarea class="form-control" id="Textarea1" style="height: 100px"></textarea required>
                                        </div>
                                        <button class="btn btn-outline-light btnContacto" id="botonEnviar" value="Send" type="submit">Enviar</button>
                                    </fieldset>
                                </form>
                                <h1 class="titulo">Crea una cuenta con nostros y recibe mails con nuestras ofertas y novedades!</h1>
                                <form id="formRegistro" action="">
                                    <fieldset class="contacto">
                                        <legend class="legend">Registro</legend>
                                        <div class="mb-5">
                                            <label for="nombre1" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="nombre1">
                                        </div>
                                        <div class="mb-5">
                                            <label for="apellidoRegistro" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="apellidoRegistro">
                                        </div>
                                        <div class="mb-5">
                                            <label for="emailRegistro" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="emailRegistro" placeholder="name@example.com">
                                        </div>
                                        <div class="formFecha">
                                            <label for="bd">Fecha de nacimiento</label>
                                            <input type="date" name="bd" id="bd">
                                        </div>
                                        <div class="form-check mb-5">
                                        <input class="form-control mb-3 mt-5" type="text" value="Termino y condiciones..." aria-label="readonly input example" readonly>
                                            <input class="form-check-input mb-3" type="checkbox" value="" id="invalidCheck">
                                            <label class="form-check-label" for="invalidCheck">
                                                Acepto los ternimos y condiciones.
                                            </label>
                                        </div>
                                        <button class="btn btn-outline-light btnContacto" id="btnRegistro" value="Send" type="submit">Registro</button>
                                    </fieldset>
                                </form>`;
    contactoForm.appendChild(divContactoForm);
}

mostrarContactoForm();

const formContacto = document.getElementById("formContacto");

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailContacto = document.getElementById("emailContacto").value;
    let nombreContacto = document.getElementById("nombreContacto").value;

    formContacto.reset();

    if (emailContacto && nombreContacto) {
        Swal.fire({
            title: "Gracias por comunicarte con nosotros!",
            text: "Responderemos tu email lo más pronto posible.",
            icon: "success",
            confirmButtonText: "OK"
        })
        localStorage.setItem("Nombre Contacto Formulario", JSON.stringify(nombreContacto));
        localStorage.setItem("Email Formulario Contacto", JSON.stringify(emailContacto));
        let nombreContactoJson = localStorage.getItem("Nombre Contacto Formulario");
        const nombreCJson = JSON.parse(nombreContactoJson);
        console.log(nombreCJson);
        let emailContactoJson = localStorage.getItem("Email Formulario Contacto");
        const emailCJson = JSON.parse(emailContactoJson);
        console.log(emailCJson);
    } else {
        Swal.fire({
            title: "Error",
            text: "Por favor, completa todos los campos requeridos.",
            icon: "error",
            confirmButtonText: "OK"
        })
    }
})


const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", (e) =>{
    e.preventDefault();
    let nombreRegistro = document.getElementById("nombre1").value;
    let apellidoRegistro = document.getElementById("apellidoRegistro").value;
    let emailRegistro = document.getElementById ("emailRegistro").value;

    formRegistro.reset();

    if(nombreRegistro && apellidoRegistro && emailRegistro){
        Swal.fire({
            title: "Gracias por registrarte!",
            text: "Como parte de nuestra clientela serás el primero en recibir nuestras ofertas!",
            icon: "info",
            confirmButtonText: "Aceptar"
    })
    localStorage.setItem("Nombre de Usuario Registrado", JSON.stringify(nombreRegistro));
    localStorage.setItem("Apellido de Usuario Registrado", JSON.stringify(apellidoRegistro));
    localStorage.setItem("Email de Usuario Registrado", JSON.stringify(emailRegistro));

    let nombreRegistroJson = localStorage.getItem("Nombre de Usuario Registrado");
    const nombreJson = JSON.parse(nombreRegistroJson);
    console.log(nombreJson);
    let apellidoRegistroJson = localStorage.getItem("Apellido de Usuario Registrado");
    const apellidoJson = JSON.parse(apellidoRegistroJson);
    console.log(apellidoJson);
    let emailRegistroJson = localStorage.getItem("Email de Usuario Registrado");
    const emailJson = JSON.parse(emailRegistroJson);
    console.log(emailJson);
    } else {
        Swal.fire({
            title: "Error",
            text: "Por favor, completa todos los campos requeridos.",
            icon: "error",
            confirmButtonText: "OK"
        })
    }
})

