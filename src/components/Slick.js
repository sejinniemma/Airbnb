import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import { height } from '@mui/system';

export default function Slick() {
  const sliderSettings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider
      {...sliderSettings}
      style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      {[1, 2, 3, 4, 5, 6].map((el, index) => {
        return (
          <div>
            <img
              src={`/images/${index + 1}.jpg`}
              alt='Slide 3'
              style={{ width: '100%', borderRadius: '8px', height: '700px' }}
            />
          </div>
        );
      })}
    </Slider>
  );
}
