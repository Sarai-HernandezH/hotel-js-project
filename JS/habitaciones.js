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
    constructor(ocasion, descuento, esLunaDeMiel = false) {
        this.ocasion = ocasion;
        this.descuento = descuento;
        this.esLunaDeMiel = esLunaDeMiel;
    }
}
const lunaDeMiel = new Promocion("Luna de Miel", 20, true);

const promocion = [lunaDeMiel];

console.log("Promociones disponibles: ");
console.log(promocion);

class Habitacion{
    constructor(id, nombre, precio, img, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.precio = Math.round(precio);
        this.img = img;
        this.descripcion = descripcion;
    }
}

const habitacionSencilla = new Habitacion (1, "Habitacion Simple Doble", 150, "../img/habitacion-d-simple.jpg", " - 2 Camas individuales. <br> - Baño con amplia ducha. <br> - Aire acondicionado. <br> - Acceso a areas comunes" );
const habitacionSencillaDeluxe = new Habitacion (2, "Habitacion Deluxe Doble", 200, "../img/habitacion-d-deluxe.jpg", " - 1 Cama matrimonial. <br> - Baño con bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> -Acceso a las areas comunes <br> - Desayuno incluido y spa.");
const habitacionMediana = new Habitacion (3,"Habitacion Mediana", 300, "../img/mediana-s.jpg", "- 4 camas indivuales. <br> - Baño amplio. <br> - Bañera apta para una persona. <br> - Aire acondicionado. <br> - Acceso a areas comunes.");
const habitacionMedianaDeluxe = new Habitacion (4, "Habitacion Mediana Deluxe", 350, "../img/mediana-d.jpg", " - 1 Cama matrimonial. <br> - Dos camas individuales. <br> - Baño amplio. <br> - Bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> - Desayuno incluido. <br> - Acceso a areas comunes y spa." );
const habitacionGrande = new Habitacion (5, "Habitacion Grande", 400, "../img/habitacion-g-s.jpg", "- 2 camas individuales. <br> - 1 cama matrimonial. <br> - 1 sofa cama de dos plazas. <br> - Cocinada equipada <br> - Baño amplio. <br> - Bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> - Acceso a areas comunes.");
const habitacionGrandeDeluxe = new Habitacion (6, "Habitaciones Grande Deluxe", 450, "../img/habitacion-g-d.jpg", "- 3 Camas matrimoniales divididas en cuartos diferentes. <br> - Cocinada equipada.  <br> - Baño amplio.  <br> - Jacuzzi con capacidad para seis personas. <br> - Aire acondicionado. <br> - Desayuno incluido. <br> - Acceso a areas comunes y spa.");
const suiteEspecial = new Habitacion (7, "Suite Especial", 700, "../img/habitacion-lujosa.jpg", " - 1 cama Queen. <br> - 1 Sofa cama de lujo de dos plazas. <br> - Baño con jacuzzi de lujo con capacidad para cuatro personas. <br> - Sauna. <br> - Balcon con salida a piscina privada. <br> - Desayuno a la habitacion incluido. <br> - Acceso a areas comunes y spa privado.");

const habitaciones = [habitacionSencilla, habitacionSencillaDeluxe, habitacionMediana, habitacionMedianaDeluxe, habitacionGrande, habitacionGrandeDeluxe, suiteEspecial];

console.log("Habitaciones existentes: ");
console.log(habitaciones);

/*
function salir() {
    alert("Gracias por visitar nuestra página");
    }

    

*/
const habitacionContenedor = document.getElementById("habitacionesRow");
let habitacionSeleccionada = null;

const mostrarHabitaciones = () =>{
    habitaciones.forEach( habitacion => {
        const habitacionesCard = document.createElement("div");
        habitacionesCard.className = "col-sm-4 habitacionesCard";
        habitacionesCard.innerHTML =`<div class="card mb-3 bg-dark">
                                        <p>
                                            <a class="btn" id="btnH" aria-expanded="false">
                                                ${habitacion.nombre}
                                            </a>
                                        </p>
                                        <div class="card-body" id="habitacionesCards">
                                            <div class=card-body bg-dark disc-card">
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
};

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
        precioNoche = habitacion.precio;
        costoEstadia.push(precioNoche);
    }
    const formularioHTML =`<div id="formularioContainer">
                                <form id="formulario">
                                    <div">
                                        <div id="botoncerrar" >
                                            <button type="button" id="btnCerrar" class="btn btn-outline-secondary mb-3 botonCerrar" onclick="cerrarFormulario()" >Salir</button>
                                        </div>
                                        <div class="mb-3 formField">
                                            <label for="nombreCompleto" class="form-label">Nombre y Apellido</label>
                                            <input type="text" class="form-control" id="nombreCompleto">
                                        </div>
                                        <div class="mb-3 formField">
                                            <label for="edad" class="form-label">Ingrese su edad</label>
                                            <input type="number" class="form-control" id="edad" min="18" required>
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
                                            <label for="promocion" class="form-label">Se queda con nosotros por su luna de miel? </label>
                                            <input type="checkbox" name="promocion" id="promocion">
                                        </div>
                                        <div class="mb-3 formField">
                                            <label for="diasEstadia" class="form-label">Cuantos días desea quedarse?</label>
                                            <input type="number" class="form-control" id="diasEstadia">
                                        </div>
                                        <select class="form-select form-select-lg mb-3 formField" aria-label= ".form-select-lg" id="pagos">
                                            <option selected disabled>Seleccione metodo de pago</option>
                                            <option value="1">Tarjeta de Credito</option>
                                            <option value="2">Transferencia</option>
                                            <option value="3">Paypal</option>
                                        </select>
                                        <div id="btnPagar" class="col-auto">
                                            <button class="btn btn-outline-secondary" type="submit" class="btn btn-dark Reservar">Pagar</button>
                                        </div>
                                        <div>
                                            <h3>El costo total de su estadia es: <span id="totalAPagar"></span></h3>
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
        let edad = parseInt(document.getElementById("validarEdad").value);
        let dni = parseInt(document.getElementById("dni").value);


        const huesped = new Huesped(nombreCompleto, email, edad, dni, diasEstadia, metodoPago);
        arrayHuespedes.push(huesped);
        
        localStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto));
        localStorage.setItem("email", JSON.stringify(email));

    const totalAPagar = document.getElementById("totalAPagar");
    let totalCosto = 0;

    const calcularTotal = () => {
        const IVA = 1.25;
        if (habitacionSeleccionada) {
            precioNoche = habitacionSeleccionada.precio;
        } else {
            precioNoche = precio;
        }

        let total = (diasEstadia * precioNoche) * IVA;

        if (document.getElementById("promocion").checked) {
          total -= (total * lunaDeMiel.descuento) / 100;
        }
        totalCosto = total;
        totalAPagar.innerHTML = `Total: ${totalCosto}`;

        formularioDeReservacion.reset();
    };
    calcularTotal();
    });
    
};

function cerrarFormulario() {
    const formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = "";
    mostrarHabitaciones ();
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
scrollDivReservaciones.innerHTML = `<div class=" container-fluid" id="reservacionesDiv">
                                        <div class="row" id="reservacionesOps">
                                            <div class="col-md-4 col-sm-12 ">
                                                <a class="nav-link active" aria-current="page" href="#" id="contacto">Contacto</a>
                                            </div>
                                            <form action="#" method="post" target="_blank" class="form-inline registroItem" id="registroItem">
                                                <div class="col-md-7 col-sm-9 col-xs-9 h-bn-forms">
                                                    <div id="calendarios">
                                                        <div class=" input-group date mg-check-in cidatemodal llegada">
                                                            <div class="input-group-addon"><i id="calendario" class="fas fa-calendar-day d-flex justify-content-center"></i></div>
                                                            <input type="text" class="form-control" id="checkin" name="checkin" placeholder="Llegada">
                                                        </div>
                                                        <div class="input-group date mg-check-out salida">
                                                            <div class="input-group-addon"><i class="fas fa-calendar-day d-flex justify-content-center"></i></div>
                                                            <input type="text" class="form-control" id="checkout" name="checkout" placeholder="Salida">
                                                        </div
                                                    </div>
                                                </div>
                                                <div class="col-md-1 col-sm-3 col-xs-3 boton">
                                                    <div class="input-group">
                                                        <div class="botones">
                                                            <button type="submit" class="btn" id="btnR">Reserva</button>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </form>
                                        </div>
                                    </div>`;
                                    
scrollDiv.appendChild(scrollDivReservaciones);


function mostrarCalendario(){
const calendarContainer = document.getElementById("calendario");
calendarContainer.innerHTML = `<div class="datepicker datepicker-dropdown data-mdb-inline="true" dropdown-menu datepicket-orient-top d-block">
                                    <div class="datepicker-days d-block">
                                        <table class="table-condensed">
                                            <thead>
                                                <tr>
                                                    <th class="prev btn"> << </th>
                                                    <th colspan="5" class="datepicker-switch">Mayo 2023</th>
                                                    <th class="next btn"> >> </th>
                                                </tr>
                                                <tr>
                                                    <th class="dow">Do </th>
                                                    <th class="dow">Lu </th>
                                                    <th class="dow">Ma </th>
                                                    <th class="dow">Mi </th>
                                                    <th class="dow">Ju </th>
                                                    <th class="dow">Vi </th>
                                                    <th class="dow">Sa </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="old disabled day">30</td>
                                                    <td class="disabled day"> 1 </td>
                                                    <td class="disabled day"> 2 </td>
                                                    <td class="disabled day"> 3 </td>
                                                    <td class="disabled day"> 4 </td>
                                                    <td class="disabled day"> 5 </td>
                                                    <td class="disabled day"> 6 </td>
                                                </tr>
                                                <tr>
                                                    <td class="disabled day"> 7 </td>
                                                    <td class="disabled day"> 8 </td>
                                                    <td class="disabled day"> 9 </td>
                                                    <td class="day"> 10 </td>
                                                    <td class="day"> 11 </td>
                                                    <td class="day"> 12 </td>
                                                    <td class="day"> 13 </td>
                                                </tr>
                                                <tr>
                                                    <td class="day"> 14 </td>
                                                    <td class="day"> 15 </td>
                                                    <td class="day"> 16 </td>
                                                    <td class="day"> 17 </td>
                                                    <td class="day"> 18 </td>
                                                    <td class="day"> 19 </td>
                                                    <td class="day"> 20 </td>
                                                </tr>
                                                <tr>
                                                    <td class="day"> 21 </td>
                                                    <td class="day"> 22 </td>
                                                    <td class="day"> 23 </td>
                                                    <td class="day"> 24 </td>
                                                    <td class="day"> 25 </td>
                                                    <td class="day"> 26 </td>
                                                    <td class="day"> 27 </td>
                                                </tr>
                                                <tr>
                                                    <td class="day"> 28 </td>
                                                    <td class="day"> 29 </td>
                                                    <td class="day"> 30 </td>
                                                    <td class="day"> 31 </td>
                                                    <td class="new day"> 1 </td>
                                                    <td class="new day"> 2 </td>
                                                    <td class="new day"> 3 </td>
                                                </tr>
                                                <tr>
                                                    <td class="new day"> 4 </td>
                                                    <td class="new day"> 5 </td>
                                                    <td class="new day"> 6 </td>
                                                    <td class="new day"> 7 </td>
                                                    <td class="new day"> 8 </td>
                                                    <td class="new day"> 9 </td>
                                                    <td class="new day"> 10 </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="7" class="today d-none">Hoy</th>
                                                </tr>
                                                <tr>
                                                    <th colspan="7" class="clear d-none">Borrar</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="datepicker-months">
                                        <table class="table-condensed">
                                            <thead>
                                                <tr>
                                                    <th class="prev"> << </th>
                                                    <th colspan="5" class="datepicker-switch">2023</th>
                                                    <th class="next"> >> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="7">
                                                        <span class="month disabled">Enero </span>
                                                        <span class="month disabled">Febrero </span>
                                                        <span class="month disabled">Marzo </span>
                                                        <span class="month disabled">Abril </span>
                                                        <span class="month">Mayo </span>
                                                        <span class="month">Junio </span>
                                                        <span class="month">Julio </span>
                                                        <span class="month">Agosto </span>
                                                        <span class="month">Septiembre </span>
                                                        <span class="month">Octubre </span>
                                                        <span class="month">Noviembre </span>
                                                        <span class="month">Diciembre </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="7" class="today d-none">Hoy</th>
                                                </tr>
                                                <tr>
                                                    <th colspan="7" class="clear d-none">Borrar</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="datepicker-years d-none">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="prev"> << </th>
                                                    <th colspan="5" class="datepicker-switch">2020-209</th>
                                                    <th class="next"> >> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="7">
                                                        <span class="year disabled">2022 </span>
                                                        <span class="year">2023 </span>
                                                        <span class="year">2024 </span>
                                                        <span class="year">2025 </span>
                                                        <span class="year">2026 </span>
                                                        <span class="year">2027 </span>
                                                        <span class="year">2028 </span>
                                                        <span class="year">2029 </span>
                                                        <span class="year new">2030 </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th colspan="7" class="today d-none">Hoy</th>
                                                </tr>
                                                <tr>
                                                    <th colspan="7" class="clear d-none">Borrar</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>`;

const fechaActual = new Date();

const diasCalendario = calendarContainer.querySelector(".datepicker-days");
const mesesCalendario = calendarContainer.querySelector(".datepicker-months");
const aniosCalendario = calendarContainer.querySelector(".datepicker-years");

const prevMesBtn = calendarContainer.querySelector(".prev");
const nextMesBtn = calendarContainer.querySelector(".next");

diasCalendario.style.display = "block";
mesesCalendario.style.display = "none";
aniosCalendario.style.display = "none";

function tablaDias() {
    diasCalendario.style.display = "block";
    mesesCalendario.style.display = "none";
    aniosCalendario.style.display = "none";
}

function tablaMeses() {
    diasCalendario.style.display = "none";
    mesesCalendario.style.display = "block";
    aniosCalendario.style.display = "none";
}

function tablaAnios() {
    diasCalendario.style.display = "none";
    mesesCalendario.style.display = "none";
    aniosCalendario.style.display = "block";
}

prevMesBtn.addEventListener("click", tablaMeses);
nextMesBtn.addEventListener("click", tablaMeses);

const cambioAnio = calendarContainer.querySelector(".datepicker-switch");
cambioAnio.addEventListener("click", tablaAnios);


function cambiarMes(direccion) {
    const cambioCalendario = document.querySelector(".datepicker-switch");
    const mesesAhora = cambioCalendario.textContent.trim();
    const mesesNombres = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const mesActualIndex = mesesNombres.indexOf(mesesAhora);
    let mesNuevoIndex;

    if (direccion === "prev") {
        mesNuevoIndex = mesActualIndex - 1;
        if (mesNuevoIndex < 0) {
            mesNuevoIndex = 11; 
        }
    } else if (direccion === "next") {
        newMonthIndex = currentMonthIndex + 1;
        if (newMonthIndex > 11) {
            newMonthIndex = 0;
        }
    }

    const mesNuevo = mesesNombres[mesNuevoIndex];
    cambioCalendario.textContent = mesNuevo;

}

const botonPrev = document.querySelector(".prev.btn");
botonPrev.addEventListener("click", function() {
    cambiarMes("prev");
});

const botonNext = document.querySelector(".next.btn");
botonNext.addEventListener("click", function() {
    cambiarMes("next");
});

    cambiarMes();
    tablaDias();
}

const muestroCalendario = document.getElementById("calendario");
muestroCalendario.addEventListener('click', mostrarCalendario);
