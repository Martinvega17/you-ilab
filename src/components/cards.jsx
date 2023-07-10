import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dataDigital from './data';

const Cards = () => {
    const [additionalElements, setAdditionalElements] = useState(dataDigital);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000, // Velocidad de reproducción automática (en milisegundos)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleToggleMore = (id) => {
        setAdditionalElements((prevElements) =>
            prevElements.map((element) => {
                if (element.id === id) {
                    return { ...element, showMore: !element.showMore };
                }
                return { ...element, showMore: false };
            })
        );
    };

    return (
        <Slider {...settings}>
            {additionalElements.map((element) => (
                <div key={element.id} classNameName="w-full max-w-lg bg-white border mb-10 mt-2 mr-8">
                    <div classNameName="flex items-start justify-start px-4 pt-10 mb-5">
                        <img
                            classNameName="w-32 h-32 mb-3 rounded-full shadow-lg"
                            src={element.image || 'viridiana'}
                            alt={`${element.name} image`}
                        />
                        <div classNameName="flex flex-col ml-4">
                            <h5 classNameName="mb-1 text-2xl font-normal text-gray-500 dark:text-gray-400 self-start">
                                {element.name}
                            </h5>
                            <span classNameName="text-lg text-gray-500 dark:text-gray-400 self-start h-full">
                                {element.profession}
                            </span>
                            <div classNameName="flex justify-start">
                                <button
                                    classNameName="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                                    onClick={() => handleToggleMore(element.id)}
                                >
                                    <i
                                        classNameName={`fa ${element.showMore
                                                ? 'fa-chevron-circle-up'
                                                : 'fa-chevron-circle-down'
                                            }`}
                                    />
                                    <span classNameName="mr-1 ml-2">More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {element.showMore && (
                        <div classNameName="p-4 bg-gray-100 dark:bg-gray-800 rounded mt-5">
                            <p classNameName="text-gray-700 dark:text-gray-300">{element.text}</p>
                        </div>
                    )}
                </div>
            ))}
        </Slider>
    );
};

export default Cards;
