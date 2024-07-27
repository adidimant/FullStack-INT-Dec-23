import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    utoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  };

  return (
    <div className="frame">
      <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk" alt="frame" className="frame-image" />
      <div className="slider-container">
        <Slider {...settings}>
          <div><img src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot1.png" alt="image1" /></div>
          <div><img src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png" alt="image2" /></div>
          <div><img src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png" alt="image2" /></div>
          <div><img src="https://static.cdninstagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png" alt="image2" /></div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;