import React from "react";
import fruitbasket from '../../src/images/fruit-basket.png';
import firstslidebg from "../../src/images/first-slider-bg.jpg";
import firstsecondbg from "../../src/images/second-slider-bg.jpg";  

function SliderApp() {
    return (
        <>
            <section id='slider' className="container">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='firstslide container d-flex mt-5' style={{ background: `linear-gradient(rgba(255, 255, 255, 0.517),rgba(255, 255, 255, 0.517)), url(${firstslidebg})` }}>
                                <div className='col-6  d-flex justify-content-center align-items-center slider-content'>
                                    <div>
                                        <h1>Don't miss amazing <br />grocery deals
                                        </h1>
                                        <a href='#' className='signup fs-5'>Sign up for the daily newsletter</a>
                                        <div class="input-group emailinput mb-3 bg-white mt-3">
                                            <i className='fa fa-paper-plane-o input-group-text fs-6 bg-transparent border-0 m-1 me-0' ></i>
                                            <input type="text" class="form-control border-0" placeholder="Your email address" aria-label="Your email address" aria-describedby="button-addon2" />
                                            <button class="btn btn-success inputbtn ps-4 pe-4" type="button" id="button-addon2">Button</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 image-content'>
                                    <img src={fruitbasket} className='img-fluid w-75 float-end me-5'></img>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='secondslide container d-flex justify-content-center align-items-center mt-5' style={{ background: `linear-gradient(rgba(255, 255, 255, 0.517),rgba(255, 255, 255, 0.517)), url(${firstsecondbg})` }}>
                                <div className='text-center secondslide-inner-container'>
                                    <h1 className='healthhead'>Boosts Your immune system</h1>
                                    <p className='healthline fs-5'>Eat Healthy, Stay Healthy</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section id='categories'></section>
        </>

    )

};


export default SliderApp;