import styled from "styled-components";
import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '/xampp/htdocs/you-ilab/src/components/Projects/Projects';
import AliadosCarousel from '../aliados';


const Home = () => {


    return (
        <div className='ml-5'>
            <Helmet>
                <title>Home | You-i Lab</title>
            </Helmet>
            <LightColor>
                <Projects />
            </LightColor>
            <AliadosCarousel />
        </div>
    );
};

export default Home;


const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
