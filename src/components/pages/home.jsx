import styled from "styled-components";
import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../Projects/carousel/Projects';
import AliadosCarousel from '../aliados';
import YIL from '../../assets/sponsors/YOU_I_ LAB_WHITE_LOGO.png'
import DBM from '../../assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from '../../assets/sponsors/IPICYT.png'
import GCIC from '../../assets/sponsors/GCIC.png'

// Import LightColor from styled-components
const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const Home = () => {
    return (
        <div className='container-fluid'>
            <Helmet>
                <title>Home | You-i Lab</title>
            </Helmet>
            <LightColor>
                <Projects />
            </LightColor>
            <AliadosCarousel />

            <div className="sponser-area pt-100 pb-100">
                <div className="container text-center">
                    <div className="flex justify-center">
                        <div className="singel-brand-item ml-10">
                            <a href="" className="mr-3">
                                <img src={YIL} alt="" className="w-24 h-auto" />
                            </a>
                        </div>
                        <div className="singel-brand-item ml-16">
                            <a href="" className="mr-3">
                                <img src={DBM} alt="" className="w-24 h-auto" />
                            </a>
                        </div>
                        <div className="singel-brand-item ml-16">
                            <a href="" className="mr-3">
                                <img src={GCIC} alt="" className="w-24 h-auto" />
                            </a>
                        </div>
                        <div className="singel-brand-item ml-16">
                            <a href="">
                                <img src={IPICYT} alt="" className="w-24 h-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;
