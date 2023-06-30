import React from 'react';
import { Helmet } from 'react-helmet';
import Carrusel from '../carrusel';



const Home = () => {
    return (
        <div className='ml-5'>
            <Helmet>
        <title>Home | You-i Lab</title>
      </Helmet>
        <Carrusel/>
            <h1>Home Page</h1>
            
            
        </div>
    );
};

export default Home;
