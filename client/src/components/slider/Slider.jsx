import React from 'react';
import Slider from 'react-slick';
import { sliderData } from '../../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { useNavigate } from 'react-router-dom';

const SliderComponent = () => {

  const navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 700
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className='slick-slide'>
            <img src={item.image} alt={`Slide ${index + 1}`} onClick={()=>navigate(`/all?cat=${item.cat}`)} style={{cursor:"pointer"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
