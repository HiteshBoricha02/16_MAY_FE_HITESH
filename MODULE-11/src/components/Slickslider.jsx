import react from "react";
import {Button,Row} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blackberry from "../images/slider-images/black-berry.png";
import cabbage from "../images/slider-images/cabbage.png";
import cakeMilk from "../images/slider-images/cake-milk.png";
import coffeeTea from "../images/slider-images/coffee-tea.png";
import custedapple from "../images/slider-images/custard-apple.png";
import dogsnacks from "../images/slider-images/dog-snacks.png";
import headphone from "../images/slider-images/headphone.png";
import kivi from "../images/slider-images/organic-kivi.png";
import redapple from "../images/slider-images/red-apple.png";
import strawberry from "../images/slider-images/strawberry.png";
// import { blackberry } from "fontawesome";

export default function SlickSlider() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div id="slickslider" className="container mt-5">
        <div>
        <Row>
            <div className="col-10">
                <h2 className="categories me-2">Featured Categories</h2>
                <span className=""><a href="#" className="text-decoration-none text-black">Coke & Milk</a></span> &nbsp;
                <span className=""><a href="#" className="text-decoration-none text-black">Coffee & Teas</a></span> &nbsp;
                <span className=""><a href="#" className="text-decoration-none text-black">Pet Food</a></span> &nbsp;
                <span className=""><a href="#" className="text-decoration-none text-black">Vegetables</a></span>
            </div>
          
        </Row>
        </div>
            <Slider {...settings} className="mt-3">
                <div className="p-2">
                    <div className="text-center sliderbox pb-1">
                    <img src={redapple} alt="apple" className="img-fluid " />
                        <h4>Red Apple</h4>
                        <p>26 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1" style={{backgroundColor:"#ebfded"}}>
                    <img src={dogsnacks} alt="dog-snacks" className="img-fluid" />
                        <h4>Snacks</h4>
                        <p>25 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1">
                    <img src={cabbage} alt="vegetables" className="img-fluid" />
                        <h4>Vegetables</h4>
                        <p>22 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1" style={{backgroundColor:"#ebfded"}}>
                    <img src={strawberry} alt="strawberry" className="img-fluid" />
                        <h4>Strawberry</h4>
                        <p>5 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1">
                    <img src={blackberry} alt="blackberry" className="img-fluid" />
                        <h4>BlackBarry</h4>
                        <p>24 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1" style={{backgroundColor:"#ebfded"}}>
                    <img src={custedapple} alt="Custedapple" className="img-fluid" />
                        <h4>Custedapple</h4>
                        <p>21 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1">
                    <img src={coffeeTea} alt="coffee-tea" className="img-fluid" />
                        <h4>Coffee & Tea</h4>
                        <p>25 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1" style={{backgroundColor:"#ebfded"}}>
                    <img src={headphone} alt="headphone" className="img-fluid" />
                        <h4>Headphone</h4>
                        <p>20 items</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center sliderbox pb-1">
                    <img src={cakeMilk} alt="cakemilk" className="img-fluid " />
                        <h4>Cake & milk</h4>
                        <p>25 items</p>
                    </div>
                </div>
                <div className="p-2 ">
                    <div className="text-center sliderbox pb-1" style={{backgroundColor:"#ebfded"}}>
                    <img src={kivi} alt="kivi" className="img-fluid" />
                        <h4>organic Kivi</h4>
                        <p>5 items</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};