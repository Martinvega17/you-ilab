import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import balvi from '../assets/aliados/balvi.png';
import cemobili from '../assets/aliados/CEMOBILI.png';
import cse from '../assets/aliados/CSE.png';
import idiap from '../assets/aliados/idiap.png';
import salud from '../assets/aliados/salud.png';
import usp from '../assets/aliados/USP.png';
import wenet from '../assets/aliados/WeNet.png';

const Carrusel = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mb-5 mt-3">Projects</h2>
      <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop transitionTime={500} className="rtl">
        <div className="carousel-image">
          <a href="https://google.com" target='_blanck'>
            <img src={balvi} alt="Balvi" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={cemobili} alt="CEMOBILI" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={cse} alt="CSE" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={idiap} alt="IDIAP" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={salud} alt="Salud" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={usp} alt="USP" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={wenet} alt="WeNet" className="max-h-40 object-contain" />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Carrusel;
