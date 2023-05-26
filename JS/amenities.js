const carouselAmenities = document.getElementById("carouselAmenities");
const carouselA = document.createElement("div");
carouselA.innerHTML = `<div id="carouselA" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselA" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="../img/spa1.jpg" class="d-block w-100  carousel-image" alt="Imagen Spa">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Ven a relajarte a nuestro Spa.</p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="../img/spa-amen.jpg" class="d-block w-100  carousel-image" alt="Imagen Spa Dos">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Deja todas la preocupaciones del día a día.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/sauna.jpg" class="d-block w-100 carousel-image" alt="Imagen Sauna">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Descomprime todo ese estres en nuestro Sauna.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/sauna1.jpg" class="d-block w-100 carousel-image" alt="Imagen Sauna Dos">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Relajate mientras disfrutas del paisaje.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/piscina.jpg" class="d-block w-100 carousel-image" alt="Imagen Piscina Interna">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Ven a nadar sin importar la temporada en nuestr piscina aclimatizada.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/jacuzzi.jpg" class="d-block w-100 carousel-image" alt="Imagen Jacuzzi">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Disfruta y relajate en nuestro Jacuzzi de primera.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/jacuzzi1.jpg" class="d-block w-100 carousel-image" alt="Imagen Jacuzzi Dos">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Jacuzzi con vista al hermoso paisaje alrededor.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../img/piscina-pano.jpg" class="d-block w-100 carousel-image" alt="Imagen Piscina Panoramica">
                                    <div class="carousel-caption d-none d-md-block">
                                        <p  class="pAmenities">Nada, diviertete y disfruta de nuestros hermosos paisajes.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselA" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselA" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>`;
    carouselAmenities.appendChild(carouselA);