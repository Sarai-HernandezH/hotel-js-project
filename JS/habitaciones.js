const IVA = 1.25
class Huesped{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}
const arrayHuespedes = [];
class Promociones {
    constructor(ocasion, descuento, esLunaDeMiel = false) {
        this.ocasion = ocasion;
        this.descuento = descuento;
        this.esLunaDeMiel = esLunaDeMiel;
    }
}
const lunaDeMiel = new Promociones("Luna de Miel", 20, true);
const masDeCincoDias = new Promociones("Más de cinco días de estadia", 5);
const masDeQuinceDias = new Promociones("Más de quince días de estadia", 10);
const arrayPromociones = [];

arrayPromociones.push(lunaDeMiel);
arrayPromociones.push(masDeCincoDias);
arrayPromociones.push(masDeQuinceDias);

console.log("Promociones disponibles: ");
console.log(arrayPromociones);

class Habitacion{
    constructor(nombre, capacidad, precio, imagen, descripcion){
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.precio = Math.round(precio);
        this.imagen = imagen;
        this.descripcion = descripcion
    }
}

const habitacionSencilla = new Habitacion ("Habitacion Simple Doble","Dos personas", 150, "../img/habitacion-d-simple.jpg", " - 2 Camas individuales. <br> - Baño con amplia ducha. <br> -Aire acondicionado. <br> - Acceso a areas comunes" );
const habitacionSencillaDeluxe = new Habitacion ("Habitacion Deluxe Doble", "Dos personas", 200, "../img/habitacion-d-deluxe.jpg", " - 1 Cama matrimonial. <br> - Baño con bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> -Acceso a las areas comunes <br> - Desayuno incluido y spa.");
const habitacionMediana = new Habitacion ("Habitacion Mediana", "Cuatro personas", 300, "../img/mediana-s.jpg", "- 4 camas indivuales. <br> -Baño amplio. <br> - Bañera apta para una persona. <br> - Aire acondicionado. <br> - Acceso a areas comunes.");
const habitacionMedianaDeluxe = new Habitacion ("Habitacion Mediana Deluxe", "Cuatro personas", 350, "../img/mediana-d.jpg", " - 1 Cama matrimonial. <br> - Dos camas individuales. <br> - Baño amplio. <br> - Bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> - Desayuno incluido. <br> - Acceso a areas comunes y spa." );
const habitacionGrande = new Habitacion ("Habitacion Grande", "Seis personas", 400, "../img/habitacion-g-s.jpg", "- 2 camas individuales. <br> - 1 cama matrimonial. <br> - 1 sofa cama de dos plazas. <br> - Cocinada equipada <br> - Baño amplio. <br> - Bañera con capacidad para dos personas. <br> - Aire acondicionado. <br> - Acceso a areas comunes.");
const habitacionGrandeDeluxe = new Habitacion ("Habitaciones Grande Deluxe", "Seis personas", 450, "../img/habitacion-g-d.jpg", "- 3 Camas matrimoniales divididas en cuartos diferentes. <br> - Cocinada equipada.  <br> - Baño amplio.  <br> - Jacuzzi con capacidad para seis personas. <br> - Aire acondicionado. <br> - Desayuno incluido. <br> - Acceso a areas comunes y spa.");
const suiteEspecial = new Habitacion ("Suite Especial", "Cuatro personas", 700, "../img/habitacion-lujosa.jpg", " - 1 cama Queen. <br> - 1 Sofa cama de lujo de dos plazas. <br> - Baño con jacuzzi de lujo con capacidad para cuatro personas. <br> - Sauna. <br> - Balcon con salida a piscina privada. <br> - Desayuno a la habitacion incluido. <br> - Acceso a areas comunes y spa privado.");
const arrayHabitaciones = [];

arrayHabitaciones.push(habitacionSencilla);
arrayHabitaciones.push(habitacionSencillaDeluxe);
arrayHabitaciones.push(habitacionMediana);
arrayHabitaciones.push(habitacionMedianaDeluxe);
arrayHabitaciones.push(habitacionGrande);
arrayHabitaciones.push(habitacionGrandeDeluxe);
arrayHabitaciones.push(suiteEspecial);

console.log("Habitaciones existentes: ");
console.log(arrayHabitaciones);

const dobles = document.getElementById("habitacionesDobles");

arrayHabitaciones.slice(0, 2).forEach(habitacion => {
    const habitacionesDoblesDiv = document.createElement("div");
    habitacionesDoblesDiv.className = "cajaHdobles";
    habitacionesDoblesDiv.innerHTML = ` <div class="habitaciones-t">
                                            <p>
                                                <a name="habitacionesDobles" class="btn" id="btnD" href="#multi-collapse-habitaciones-Dobles" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="multi-collapse-habitaciones-Dobles">
                                                    ${habitacion.nombre}
                                                </a>
                                            </p>
                                            <div class="collapse" id="multi-collapse-habitaciones-Dobles">
                                                <div class="card card-body bg-dark disc-card" id="habitacionesDobles">
                                                    <img class="imgH" src="${habitacion.imagen}" alt="${habitacion.nombre}">
                                                    <h2 class="descripcionT">${habitacion.nombre} </h2>                           
                                                    <h3 class="descripcionT">Descripcion:</h3>
                                                    <h4 class="descripcion">${habitacion.descripcion}</h4>
                                                    <p>Precio por noche ${habitacion.precio} $</p>
                                                    <button class="btn btn-outline-light btnReserva" id="btnRDoble"> Reserva Ahora </button>
                                                </div>
                                            </div>
                                        </div>`;
    dobles.appendChild(habitacionesDoblesDiv);
});

const medianas = document.getElementById("habitacionesMedianas");

arrayHabitaciones.slice(2, 4).forEach(habitacion => {
    const habitacionesMedianasDiv = document.createElement("div");
    habitacionesMedianasDiv.className = "cajaHdobles";
    habitacionesMedianasDiv.innerHTML = `<div class="habitaciones-t">
                                            <p>
                                                <a class="btn" id="btnM" href="#multi-collapse-habitaciones-Medianas" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="multi-collapse-habitaciones-Medianas">
                                                    ${habitacion.nombre}
                                                </a>
                                            </p>
                                            <div class="collapse" id="multi-collapse-habitaciones-Medianas">
                                                <div class="card card-body bg-dark disc-card" id="habitacionesMedianas">
                                                    <img class="imgH" src="${habitacion.imagen}" alt="${habitacion.nombre}">
                                                    <h2 class="descripcionT" >${habitacion.nombre} </h2>                           
                                                    <h3 class="descripcionT">Descripcion:</h3>                                                                         
                                                    <h4 class="descripcion">${habitacion.descripcion}</h4>
                                                    <p>Precio por noche ${habitacion.precio} $</p>
                                                    <button class="btn btn-outline-light btnReserva" id="btnRMediana"> Reserva Ahora </button>
                                                </div>
                                            </div>
                                        </div>`;
    medianas.appendChild(habitacionesMedianasDiv);
});

const grandes = document.getElementById("habitacionesGrandes");

arrayHabitaciones.slice(4, 6).forEach(habitacion => {
    const habitacionesGrandesDiv = document.createElement("div");
    habitacionesGrandesDiv.className = "cajaHdobles";
    habitacionesGrandesDiv.innerHTML = `<div class="habitaciones-t">
                                            <p>
                                                <a name="habitacionesGrandes" class="btn" id="btnG" href="#multi-collapse-habitaciones-Grandes" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="multi-collapse-habitaciones-Grandes">
                                                    ${habitacion.nombre}
                                                </a>
                                            </p>
                                            <div class="collapse" id="multi-collapse-habitaciones-Grandes">
                                                <div class="card card-body bg-dark disc-card" id="habitacionesGrandes">
                                                    <img class="imgH" src="${habitacion.imagen}" alt="${habitacion.nombre}">
                                                    <h2 class="descripcionT" >${habitacion.nombre} </h2>
                                                    <h3 class="descripcionT" >Descripcion:</h3>
                                                    <h4 class="descripcion">${habitacion.descripcion}</h4>
                                                    <p>Precio por noche ${habitacion.precio} $</p>
                                                    <button class="btn btn-outline-light btnReserva" id="btnRGrande"> Reserva Ahora </button>
                                                </div>
                                            </div>
                                        </div>`;
    grandes.appendChild(habitacionesGrandesDiv);
});

const lujosa = document.getElementById("habitacionDeLujo");
const habitacion = arrayHabitaciones[6];

const habitacionLujoDiv = document.createElement("div");
habitacionLujoDiv.className = "cajaHdobles";
habitacionLujoDiv.innerHTML = `<div class="habitaciones-t">
                                    <p>
                                        <a name="habitacionDeLujo" class="btn" id="btnL"  href="#multi-collapse-habitacion-Lujo" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="multi-collapse-habitacion-Lujo">
                                            ${habitacion.nombre}
                                        </a>
                                    </p>
                                    <div class="collapse" id="multi-collapse-habitacion-Lujo">
                                        <div class="card card-body bg-dark disc-card" id="habitacionLujo">
                                            <img class="imgH" src="${habitacion.imagen}" alt="${habitacion.nombre}">
                                            <h2 class="descripcionT">${habitacion.nombre} </h2>
                                            <h3 class="descripcionT">Descripcion:</h3> 
                                            <h4 class="descripcion">${habitacion.descripcion}</h4>
                                            <p>Precio por noche ${habitacion.precio} $</p>
                                            <button class="btn btn-outline-light btnReserva" id="btnRLujo"> Reserva Ahora </button>
                                        </div>
                                    </div>
                                </div>`;
lujosa.appendChild(habitacionLujoDiv);

arrayHabitaciones.forEach((habitacion, index) =>{
    const btnReserva = habitacionesDiv.querySelector(".btnReserva");
    btnReserva.addEventListener("click", () => {
    formularioDeReserva(habitacion);
    });
});
function formularioDeReserva(habitacion) {
    // Create the form dynamically
    const form = document.createElement("form");
    form.innerHTML = ``
}

window.addEventListener('scroll', function() {
    const divScroll = window.scrollY;
    if (divScroll > 100) {
        scrollDiv.classList.remove('hidden');
    } else {
        scrollDiv.classList.add('hidden');
    }
    const doblesLink = document.querySelector('a[href="#habitacionesDobles"]');
    doblesLink.addEventListener('click', scrollToSection);

    const medianasLink = document.querySelector('a[href="#habitacionesMedianas"]');
    medianasLink.addEventListener('click', scrollToSection);

    const grandesLink = document.querySelector('a[href="#habitacionesGrandes"]');
    grandesLink.addEventListener('click', scrollToSection);

    const lujoLink = document.querySelector('a[href="#habitacionDeLujo"]');
    lujoLink.addEventListener('click', scrollToSection);

    function scrollToSection(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = target.offsetTop - 180; 
        window.scrollTo({
        top: offset,
        behavior: 'smooth'
        });
    }
});
const scrollDiv = document.getElementById("scrollDiv");
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
