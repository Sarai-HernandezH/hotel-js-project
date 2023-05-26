setTimeout( () => {
    Swal.fire({
        icon: "info",
        title: "Bienvenido!",
        html: `Ésta pagina fue creada con fines educativos. <br> Todos los derechos reservados a los dueños de las imagenes usadas.`,
        background: `#aeacac`,
        backdrop: `rgba(0,0,123,0.4)
                    url("./img/nyan-cat.gif")
                    left top
                    no-repeat`,
        timer: 7000
    })
}, 3000)

const indexDescripcion = document.getElementById("indexDescripcion");
const indexD = document.createElement("p");
indexD.innerHTML= `<p class="indexBienvenida"> ¡Hola y bienvenido al hotel mil y una noches.! Estamos encantados de recibirte en este oasis de comodidad y relajación. Permíteme mostrarte todas las maravillosas instalaciones que tenemos para ofrecerte (imagenes ilustrativas en nuestra sección de <a class="iBienvenida" href="./pages/amenities.html"> Amenities <a/>).
                    En primer lugar, te invitamos a sumergirte en un mundo de bienestar en nuestro increíble spa. Aquí encontrarás una amplia gama de tratamientos rejuvenecedores y terapias relajantes que te ayudarán a desconectar y revitalizar tu cuerpo y mente.</p>
                    
                    <p class="indexBienvenida"> Nuestro sauna es otro de los tesoros que tenemos para ti. Podrás liberar toxinas, eliminar el estrés y disfrutar de una experiencia de purificación única. Permítete relajar tus músculos y dejar que el calor te envuelva mientras te sumerges en un estado de profunda tranquilidad.
                    Si te apetece disfrutar de una experiencia acuática, nuestra piscina climatizada es perfecta para ti. Ya sea para nadar unas cuantas vueltas o simplemente flotar y disfrutar de la calma del agua, te aseguramos que te sentirás completamente renovado.
                    </p>
                    
                    <p class="indexBienvenida">Si buscas un toque de lujo adicional, te invitamos a sumergirte en nuestro jacuzzi. Con sus burbujas masajeadoras y su ambiente relajante, te garantizamos una experiencia inolvidable que te permitirá liberar todas las tensiones acumuladas.
                    Nuestro gimnasio completamente equipado es ideal para aquellos que desean mantenerse en forma durante su estancia. Podrás ejercitarte con las últimas máquinas y equipo de entrenamiento, y disfrutar de un ambiente estimulante y motivador mientras te pones en forma.</p>

                    <p class="indexBienvenida"> Por último, pero no menos importante, nuestra piscina con vista panorámica te brindará una vista espectacular mientras te relajas y disfrutas del sol. Imagínate disfrutando de un refrescante chapuzón rodeado de un paisaje impresionante, creando recuerdos que durarán toda la vida.
                    En resumen, en nuestro hotel de lujo encontrarás un mundo de comodidades y experiencias únicas. Ya sea que desees mimarte en nuestro spa, liberar tensiones en el sauna, sumergirte en nuestras piscinas, relajarte en el jacuzzi, mantenerte activo en el gimnasio o disfrutar de una vista panorámica desde la piscina, estamos aquí para hacer que tus momentos especiales sean inolvidables.
                    ¡Bienvenido a nuestro hotel de ensueño! Estamos emocionados de ser parte de tus recuerdos más preciosos y de brindarte una experiencia inigualable llena de lujo y confort.</p>`;
indexDescripcion.appendChild(indexD);

const carouselPrincipal = document.getElementById("carouselIndex");
const carouselIndex = document.createElement("div");
carouselIndex.innerHTML = `<div id="carouselI" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselI" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselI" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselI" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselI" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="./img/vista-i.jpg" class="d-flex w-100 carousel-image" alt="Vista del Hotel">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="10000">
                                        <img src="./img/comedor-i.jpg" class="d-flex w-100 carousel-image" alt="Comedor del hotel">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="10000">
                                        <img src="./img/img-hotel.jpg" class="d-flex w-100 carousel-image" alt="Hotel imagen">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="10000">
                                        <img src="./img/index-i.jpg" class="d-flex w-100 carousel-image" alt="Hotel Pasillo">
                                    </div>
                                </div>
                                <button class="carousel-control-prev w-95" type="button" data-bs-target="#carouselI" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next w-95" type="button" data-bs-target="#carouselI" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>`;
carouselPrincipal.appendChild(carouselIndex);






