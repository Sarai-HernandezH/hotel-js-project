class Huesped{
    constructor( nombreCompleto, email, validarEdad, dni, diasEstadia, metodoPago){
        this.nombrecompleto = nombreCompleto;
        this.email = email;
        this.validarEdad = validarEdad;
        this.dni = dni;
        this.diasEstadia = diasEstadia;
        this.metodoPago = metodoPago;
    }
}
const arrayHuespedes = [];
class Promocion {
    constructor(ocasion, descuento) {
        this.ocasion = ocasion;
        this.descuento = descuento;
    }
}
const lunaDeMiel = new Promocion("Luna de Miel", 25 );
const aniversario = new Promocion("Aniversario", 15);
const viajeDeNegocios = new Promocion("Viaje De Negocios", 10);

const promocion = [lunaDeMiel, aniversario, viajeDeNegocios];

console.log("Promociones disponibles: ");
console.log(promocion);

let habitaciones = [];

function mostrarHabitaciones() {
    const habitacionContenedor = document.getElementById("habitacionesRow");
    const habitacionesDisponibles = "../json/habitaciones.json";
    
    fetch(habitacionesDisponibles)
        .then(respuesta => respuesta.json())
        .then((datos) => {
            habitaciones = [...datos];
            console.log("Habitaciones disponibles: ", datos);
            datos.forEach(habitacion => {
                const habitacionesCard = document.createElement("div");
                habitacionesCard.className = "col-sm-4 habitacionesCard";
                habitacionesCard.innerHTML = `<div class="card mb-3 bg-dark">
                                            <p>
                                                <a name="${habitacion.id}" id="btnH" aria-expanded="false">
                                                    ${habitacion.nombre}
                                                </a>
                                            </p>
                                            <div class="card-body" id="habitacionesCards">
                                                <div class="card-body bg-dark disc-card">
                                                    <img class="card-img-top imgH mb-4" src="${habitacion.img}" alt="${habitacion.nombre}">                           
                                                    <h3 class="card-tittle descripcionT mb-3">Descripcion:</h3>
                                                    <h4 class="card-text descripcion">${habitacion.descripcion}</h4>
                                                    <p id="precio" class="card-text descripcionT precio">Precio por noche ${habitacion.precio} $</p>
                                                    <button class="btn btn-outline-light" id="btnReserva${habitacion.id}"> Reserva Ahora </button>
                                                </div>
                                            </div>
                                        </div>`;
            habitacionContenedor.appendChild(habitacionesCard);
            const botonFormulario = document.getElementById(`btnReserva${habitacion.id}`);
            botonFormulario.addEventListener("click", () => {
                mostrarFormulario(habitacion.id, habitacion.precio);
            });
        });
    })
    .catch(error => console.error(error))
}

let habitacionSeleccionada = null;
const formContainer = document.getElementById("formContainer");

let costoEstadia = [];


const mostrarFormulario = (id, precio) => {
    const cards = document.querySelectorAll('.habitacionesCard');
    cards.forEach(card => {
        card.style.display = 'none';
    });
    formContainer.classList.remove("hidden");
    let habitacion;
    let precioNoche;
    if (habitacionSeleccionada) {
        precioNoche = habitacionSeleccionada.precio;
    } else {
        habitacion = habitaciones.find((habitacion) => habitacion.precio === precio);
        precioNoche = Math.round(habitacion.precio);
        costoEstadia.push(precioNoche);
    }
    
    const formularioHTML =`<div id="formularioContainer">
                                <form id="formulario">
                                    <div>
                                        <h1 id="formTitulos">${habitacion.nombre} , ${habitacion.precio}$ por noche </h1>
                                            <div id="botoncerrar">
                                                <button type="button" id="btnCerrar" class="btn btn-outline-secondary mb-3 botonCerrar" " >Salir</button>
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="nombreCompleto" class="form-label">Nombre y Apellido</label>
                                                <input type="text" class="form-control" id="nombreCompleto" >
                                            </div>
                                            <div class=" mb-3-md FormField">
                                                <label for="edad">Edad (Debe ser mayor de 18 años para reservar)</label>
                                                <input type="number" name="edad" id="edad">
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="email" class="form-label">Correo Electrónico</label>
                                                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="dni" class="form-label">Numero de DNI</label>
                                                <input type="number" class="form-control" id="dni">
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="diasEstadia" class="form-label">Cuantos días desea quedarse?</label>
                                                <input type="number" class="form-control" id="diasEstadia" min="1" max="15">
                                            </div>
                                            <fieldset mb-3>
                                                <legend mb-3">Es su estadia una ocasión especial? </legend>
                                                    <div class="form-check promocion mb-3">
                                                        <input class="form-check-input" type="radio" name="promocion" value="Luna de Miel" id="lunaDeMiel">
                                                        <label class="form-check-label" for="lunaDeMiel">Luna de miel</label>
                                                    </div>
                                                    <div class="form-check promocion mb-3">
                                                        <input class="form-check-input" type="radio" name="promocion" value="Aniversario" id="aniversario">
                                                        <label class="form-check-label"  for="aniversario">Aniversario</label>
                                                    </div>
                                                    <div class="form-check promocion mb-3">
                                                        <input class="form-check-input" type="radio" name="promocion" value="Viaje De Negocios" id="viajeDeNegocios">
                                                        <label class="form-check-label"  for="viajeDeNegocios">Viaje De Negocios</label>
                                                    </div>
                                                </fieldset>
                                                <select class="form-select form-select-lg mb-3 formField" aria-label=".form-select-lg" id="pagos">
                                                    <option selected disabled>Seleccione metodo de pago</option>
                                                    <option value="1">Tarjeta de Credito</option>
                                                    <option value="2">Transferencia</option>
                                                    <option value="3">Paypal</option>
                                                </select>
                                                <div class="col-auto">
                                                    <button id="btnPagar" type="button" class="btn btn-outline-secondary">Pagar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>`;
    formContainer.innerHTML = formularioHTML;
                        
    const selectedCard = document.getElementById(`btnReserva${id}`).closest(".habitacionesCard");

    if (selectedCard) {
        selectedCard.style.display = 'none';
    }

    const formularioDeReservacion = document.getElementById("formulario");

    // ACA HONESTAMENTE INTENTE DE TODO PERO SI USO SUBMIT EN LUGAR DE CLICK EL EVENTLISTENER DE BTNPAGAR DEJA DE FUNCIONAR
    // AL USAR CLICK EN EL FORMULARIO LA CONSOLA RECARGA LA INFORMACION CADA VEZ QUE EL USUARIO AGREGA INFORMACION, NO ENCONTRE LA SOLUCION PARA ESTO
    formularioDeReservacion.addEventListener("click", () => {

        let totalCosto = 0;
        let descuento = 0;
        let promocionSeleccionada;
        const IVA = 1.25;

        let diasEstadia = parseInt(document.getElementById("diasEstadia").value);
        let metodoPago = document.querySelector("#pagos").value;
        let nombreCompleto = document.getElementById("nombreCompleto").value;
        let email = document.getElementById("email").value;
        let edad = parseInt(document.getElementById("edad").value);
        let dni = parseInt(document.getElementById("dni").value);

        const huesped = new Huesped(nombreCompleto, email, edad, dni, diasEstadia, metodoPago);
        arrayHuespedes.push(huesped);

        localStorage.setItem("Nombre Completo", JSON.stringify(nombreCompleto));
        localStorage.setItem("Email", JSON.stringify(email));
        let nombreCompletoF = localStorage.getItem("Nombre Completo");
        const nombreFJson = JSON.parse(nombreCompletoF);
        console.log(nombreFJson);
        let emailForm = localStorage.getItem("Email");
        const emailFormJson = JSON.parse(emailForm);
        console.log(emailFormJson);

        if (habitacionSeleccionada) {
            precioNoche = habitacionSeleccionada.precio;
        }

        let precioNormal = (diasEstadia * Math.round(precioNoche)) * IVA;
        const promoRadios = document.querySelectorAll('input[name="promocion"]');

        for (const radio of promoRadios) {
            if (radio.checked) {
                const promocionId = radio.value;
                promocionSeleccionada = promocion.find((promocion) => promocion.ocasion === promocionId);
                break;
            }
        }
        if (promocionSeleccionada) {
            descuento = Math.round(precioNormal) * (promocionSeleccionada.descuento / 100);
        }
        totalCosto = Math.round(precioNormal - descuento);
        const numeroDeReserva = Math.floor(Math.random() * 9000000) + 1000000;
        localStorage.setItem("Numero de Reserva", JSON.stringify(numeroDeReserva));
        const numReserva = localStorage.getItem("Numero de Reserva");
        const numReservaJson = JSON.parse(numReserva);
        console.log(numReservaJson);
        console.log(totalCosto + numeroDeReserva);
        
        const btnPagar = document.getElementById("btnPagar");
        btnPagar.addEventListener("click", () => {
            if (!nombreCompleto || !email || !edad || !dni || !diasEstadia || !metodoPago) {
                Swal.fire({
                    title: "Error",
                    text: "Por favor, completa todos los campos requeridos.",
                    icon: "error",
                    confirmButtonText: "OK"
                });
                return;
            } else {
                Swal.fire({
                    title: "Gracias por escogernos!",
                    text: "Para completar su reserva de click en continuar",
                    confirmButtonText: "Aceptar",
                    denyButtonText: "Cancelar",
                    showConfirmButton: true,
                    showDenyButton: true,
                    html: `${huesped.nombrecompleto} El total de su estadia es ${totalCosto}$.`,
                    icon: "success"
                }).then((resultado) => {
                    if(resultado.isConfirmed){
                        Swal.fire({
                            title:"Disfrute su estadia!",
                            html:`${huesped.nombrecompleto}. Su numero de reserva es ${numeroDeReserva}`,
                            text:"Su habitación estará lista a partir de las 3:00pm",
                            icon: "success",
                            timer: 5000
                        }).then(() => {
                            location.reload(); 
                        });
                    } else if (resultado.isDenied) {
                        Swal.fire({
                        title: "Lamentamos su decisión, esperamos verle pronto",
                        icon: "error",
                        timer: 5000
                    }).then(() => {
                        location.reload(); 
                    });
                }
            });
        }
        formularioDeReservacion.reset(); 
    });
    });
    const botonCerrar = document.getElementById("btnCerrar");
    botonCerrar.addEventListener("click", () => {
        formContainer.classList.add("hidden");
        location.reload();
    });
}    



mostrarHabitaciones();

const scrollDiv = document.getElementById("scrollDiv");

window.addEventListener('scroll', function() {
    const divScroll = window.scrollY;
    if (divScroll > 100) {
        scrollDiv.classList.remove('hidden');
    } else {
        scrollDiv.classList.add('hidden');
    }
});

const scrollDivReservaciones = document.createElement("div");
scrollDivReservaciones.innerHTML = `<div class=" container-fluid" id="carouselNav">
                                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="stickyCarousel" src="../img/ciudad.jpg" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="stickyCarousel" src="../img/fiesta.jpg" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="stickyCarousel" src="../img/paisaje.jpg" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="stickyCarousel" src="../img/playa.jpg" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="stickyCarousel" src="../img/spa.jpg" alt="...">
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;
                                    
scrollDiv.appendChild(scrollDivReservaciones);

