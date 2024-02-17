"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      slidesToScroll: 1,
    pauseOnHover: true
    };

    return (
      <div className=''>
    <Slider {...settings} className="custom-carousel">
      {images.map((slide, index) => (
        <div className='custom-slide bg-gray-200 shadow-md hover:bg-gray-300 p-2 flex-end' key={index}>
              <div>
              <div className='text-green-600 lg:text-2xl md:text-xl sm:text-lg'> {slide.title}</div>
                  <div className=' lg:text-xl md:text-lg sm:text-md p-2 m-2'>{slide.subtitle}</div>
                  </div>
              <img className='Carousel' src={slide.Image} alt={`Slide ${index + 1}`} width={400} height={100} />
              
        </div>
      ))}
            </Slider>
            </div>
  );
};

export default Carousel;

