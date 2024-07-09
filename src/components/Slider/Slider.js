import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

export default function SimpleSlider() {
    var settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false,
                    // arrows: true,
                    // dots: false,
                },
            },
        ],
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                <div>
                    <figure>
                        <img src={require('../../assets/images/slider002.jpg')} alt="이미지1" />
                        <div class="game_title">
                            <div class="image-wrapper">
                                <img class="image" src={require('../../assets/images/logo_ts2.png')} />
                            </div>
                            <figcaption class="txt">
                                <em class="p">Dominate the Martial Arts World!</em>
                                <span class="text-wrapper-3">
                                    Master the art of combat and rise to power in the ultimate martial arts MMORPG.
                                </span>
                            </figcaption>
                            <button class="button">
                                <a href="/ts2" class="text">
                                    LEARN MORE
                                </a>
                            </button>
                        </div>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={require('../../assets/images/slider001.jpg')} alt="이미지1" />
                        <div class="game_title">
                            <div class="image-wrapper">
                                <img class="image" src={require('../../assets/images/logo_aika.png')} />
                            </div>
                            <figcaption class="txt">
                                <em class="p">Unleash Your Power in Aika Online Global</em>
                                <span class="text-wrapper-3">
                                    Engage in massive PvP battles and dominate your rivals. Embark on epic quests and
                                    discover hidden treasures.
                                </span>
                            </figcaption>
                            <button class="button">
                                <a href="/aika" class="text">
                                    LEARN MORE
                                </a>
                            </button>
                        </div>
                    </figure>
                </div>
            </Slider>
        </div>
    );
}
