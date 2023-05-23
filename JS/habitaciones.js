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
const lunaDeMiel = new Promocion("Luna de Miel", 20, );
const aniversario = new Promocion("Aniversario", 10);
const viajeDeNegocios = new Promocion("Viaje de Negocios", 5);

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
                                                <a name="${habitacion.id}" class="btn" id="btnH" aria-expanded="false">
                                                    ${habitacion.nombre}
                                                </a>
                                            </p>
                                            <div class="card-body" id="habitacionesCards">
                                                <div class="card-body bg-dark disc-card">
                                                    <img class="card-img-top imgH" src="${habitacion.img}" alt="${habitacion.nombre}">
                                                    <h2 class="card-tittle descripcionT">${habitacion.nombre} </h2>                           
                                                    <h3 class="card-body descripcionT">Descripcion:</h3>
                                                    <h4 class="card-text descripcion">${habitacion.descripcion}</h4>
                                                    <p id="precio" class="card-text descripcion precio">Precio por noche ${habitacion.precio} $</p>
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
                                                <button type="button" id="btnCerrar" class="btn btn-outline-secondary mb-3 botonCerrar" onclick="cerrarFormulario()" >Salir</button>
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="nombreCompleto" class="form-label">Nombre y Apellido</label>
                                                <input type="text" class="form-control" id="nombreCompleto" required>
                                            </div>
                                            <div class=" mb-3-md formFecha">
                                                <label for="edad">Fecha de nacimiento (Debe ser mayor de 20 años para reservar)</label>
                                                <input type="date" name="edad" id="edad" max="2003-01-01"">
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="email" class="form-label">Correo Electrónico</label>
                                                <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="dni" class="form-label">Numero de DNI</label>
                                                <input type="number" class="form-control" id="dni">
                                            </div>
                                            <div class="mb-3 formField">
                                                <label for="diasEstadia" class="form-label">Cuantos días desea quedarse?</label>
                                                <input type="number" class="form-control" id="diasEstadia">
                                            </div>
                                            <fieldset mb-3>
                                                <legend mb-3">Es su estadia una ocasión especial? </legend>
                                                    <div class="promocion mb-3">
                                                        <input type="radio" name="promocion" value="Luna de Miel" id="lunaDeMiel">
                                                        <label for="lunaDeMiel">
                                                            Luna de miel
                                                        </label>
                                                    </div>
                                                    <div class="promocion mb-3">
                                                        <input type="radio" name="promocion" value="Aniversario" id="aniversario">
                                                        <label for="aniversario">
                                                            Aniversario
                                                        </label>
                                                    </div>
                                                    <div class="promocion mb-3">
                                                        <input type="radio" name="promocion" value="Viaje De Negocios" id="viajeDeNegocios">
                                                        <label for="viajeDeNegocios">
                                                            Viaje De Negocios
                                                        </label>
                                                    </div>
                                                </fieldset>
                                                <select class="form-select form-select-lg mb-3 formField" aria-label=".form-select-lg" id="pagos">
                                                    <option selected disabled>Seleccione metodo de pago</option>
                                                    <option value="1">Tarjeta de Credito</option>
                                                    <option value="2">Transferencia</option>
                                                    <option value="3">Paypal</option>
                                                </select>
                                                <div id="btnPagar" class="col-auto">
                                                    <button class="btn btn-outline-secondary" type="submit" class="btn btn-dark reservar" id="btnPagar">Pagar</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>`;
    formContainer.innerHTML = formularioHTML;
                        
    const selectedCard = document.getElementById(`btnReserva${id}`).closest(".habitacionesCard");
    const formularioContainer = selectedCard.querySelector("#containerFormulario");
    if (formularioContainer) {
        selectedCard.replaceChild(formContainer, formularioContainer);
    } else {
        selectedCard.appendChild(formContainer);
    }
    const formularioDeReservacion = document.getElementById("formulario");
    formularioDeReservacion.addEventListener('submit', (e) => {
        e.preventDefault();
        
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

        const calcularTotal = () => {
            let totalCosto = 0;
            let descuento = 0;
            let promocionSeleccionada;
            const IVA = 1.25;

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

            const botonPagar = document.getElementById("btnPagar");

            botonPagar.addEventListener("submit", () =>{
                Swal.fire({
                    title: "Gracias por escogernos",
                    text: "Para completar su reserva de click en continuar",
                    confirmButtonText: "Aceptar",
                    html: `El total de su estadia es ${totalCosto}`,
                    icon: 'success'
                })
            })
            formularioDeReservacion.reset();
    };

    calcularTotal();
    });
    
};

function cerrarFormulario() {
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "";
};

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


