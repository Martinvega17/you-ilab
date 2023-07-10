import React from 'react';
import { Helmet } from 'react-helmet';
import Carrusel from '../carrusel';
import AliadosCarousel from '../aliados';

const Home = () => {
    return (
        <div classNameName='ml-5'>
            <Helmet>
                <title>Home | You-i Lab</title>
            </Helmet>
            <Carrusel />
            <AliadosCarousel />
        </div>
    );
};

export default Home;
