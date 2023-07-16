import styled from "styled-components";
import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../Projects/carousel/Projects';
import AliadosCarousel from '../aliados';
import YIL from '../../assets/sponsors/YOU_I_ LAB_WHITE_LOGO.png'
import DBM from '../../assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from '../../assets/sponsors/IPICYT.png'
import GCIC from '../../assets/sponsors/GCIC.png'

// Importar LightColor from styled-components
const LightColor = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const Home = () => {
    return (
        <div className="container-fluid">
            <Helmet>
                <title>Home | You-i Lab</title>
            </Helmet>
            <LightColor>
                <Projects />
            </LightColor>
            <AliadosCarousel />
            <div className="sponser-area pt-8 pb-8 pt-28 pb-16 h-80">
                <div className="container mx-auto text-center ">
                    <div className="flex justify-center justify-around">
                        <div className="flex mb-4 md:mb-0">
                            <div className="singel-brand-item mr-3 ml-4 ">
                                <a href="">
                                    <img src={YIL} alt="" className="w-24 h-auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex mb-4 md:mb-0">
                            <div className="singel-brand-item mr-3 ml-4">
                                <a href="">
                                    <img src={DBM} alt="" className="w-24 h-auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex mb-4 md:mb-0">
                            <div className="singel-brand-item mr-3 ml-4">
                                <a href="">
                                    <img src={GCIC} alt="" className="w-24 h-auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex mb-4 md:mb-0">
                            <div className="singel-brand-item ml-4">
                                <a href="">
                                    <img src={IPICYT} alt="" className="w-24 h-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Home;
