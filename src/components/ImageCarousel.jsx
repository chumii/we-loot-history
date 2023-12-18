// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageCarousel.css'; // Create this CSS file for styling

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
    };


    return (
        <>
            <div className="carousel-container">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <div className='carousel-grid'>
                                <div className='carousel-bossname'><span className='boss-vs'>vs</span><br />{image.boss}</div>
                                <div className='carousel-top'>
                                    {image.roster.map((player, index) => (
                                        <span key={index} className={player.class}>
                                            {player.name}
                                        </span>
                                    ))}
                                </div>
                                <div className='carousel-bottom'>
                                    <img src={image.url} alt={`Slide ${index}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ImageCarousel;
