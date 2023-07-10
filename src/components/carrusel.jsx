import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import centinela from '../assets/projects/logo_centinela.png';
import wenet from '../assets/projects/logo_wenet.png';
import centinela_salud from '../assets/projects/logo_centinela_salud.png';
import muframex from '../assets/projects/logo_muframex.png';
import horizonte from '../assets/projects/logo_hsaludable.png';
import juventud from '../assets/projects/logo_juventud.png';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática (en milisegundos)
  }

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  const images = [
    {
      id: 1,
      src: centinela,
      alt: "Logo Centinela",
      url: "https://www.example.com/centinela"
    },
    {
      id: 2,
      src: wenet,
      alt: "Logo WeNet",
      url: "https://www.example.com/wenet"
    },
    {
      id: 3,
      src: centinela_salud,
      alt: "Logo Centinela Salud",
      url: "https://www.example.com/centinela-salud"
    },
    {
      id: 4,
      src: muframex,
      alt: "Logo Muframex",
      url: "https://www.example.com/muframex"
    },
    {
      id: 5,
      src: horizonte,
      alt: "Logo HSaludable",
      url: "https://www.example.com/hsaludable"
    },
    {
      id: 6,
      src: juventud,
      alt: "Logo Juventud",
      url: "https://www.example.com/juventud"
    }
  ];

 return (
    <div>
      <h2 classNameName='text-center mt-10'>Proyectos</h2>
      <Slider {...settings} responsive={responsiveSettings}>
        {images.map((image) => (
          <div key={image.id}>
            <a href={image.url} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} classNameName='carrusel-images'  />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carrusel
