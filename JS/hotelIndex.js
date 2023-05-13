    const carouselPrincipal = document.getElementById("carouselIndex");
    const carouselIndex = document.createElement("div");
    carouselIndex.innerHTML = `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="10000">
                                            <img src="./img/vista-i.jpg" class="d-flex w-100 carousel-image" alt="Vista del Hotel">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="10000">
                                            <img src="./img/comedor-i.jpg" class="d-flex w-100 carousel-image" alt="Comedor del hotel">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="10000">
                                            <img src="./img/img-hotel.jpg" class="d-flex w-100 carousel-image" alt="Hotel imagen">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="10000">
                                            <img src="./img/index-i.jpg" class="d-flex w-100 carousel-image" alt="Hotel Pasillo">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Fourth slide label</h5>
                                                <p>Some representative placeholder content for the fourth slide.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev w-95" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next w-95" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>`;
carouselPrincipal.appendChild(carouselIndex);




