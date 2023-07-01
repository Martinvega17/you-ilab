import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import centinela from '../assets/proyectos/logo_centinela.png';
import wenet from '../assets/proyectos/logo_wenet.png';
import centinela_salud from '../assets/proyectos/logo_centinela_salud.png';
import muframex from '../assets/proyectos/logo_muframex.png';
import horizonte from '../assets/proyectos/logo_hsaludable.png';
import juventud from '../assets/proyectos/logo_juventud.png';


const Carrusel = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mb-5 mt-3">Projects</h2>
      <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop transitionTime={500} className="rtl">
        <div className="carousel-image">
          <a href="https://google.com" target='_blanck'>
            <img src={centinela} alt="Centinela" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={wenet} alt="Wenet" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={centinela_salud} alt="Centinela de la salud" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={muframex} alt="Muframex" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={horizonte} alt="Horizonte saludable" className="max-h-40 object-contain" />
          </a>
        </div>
        <div className="carousel-image">
          <a href="https://example.com">
            <img src={juventud} alt="Juventud al dia" className="max-h-40 object-contain" />
          </a>
        </div>

      </Carousel>
    </div>
  );
};

export default Carrusel;
