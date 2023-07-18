import styled from "styled-components";
import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../Projects/carousel/Projects';
import AliadosCarousel from '../aliados';
import YIL from '../../assets/sponsors/YOU_I_ LAB_WHITE_LOGO.png'
import DBM from '../../assets/sponsors/DBM_WHITE_LOGO.png'
import IPICYT from '../../assets/sponsors/IPICYT.png'
import GCIC from '../../assets/sponsors/GCIC.png'
import collaborators from '../../assets/team/Collage_colab_.jpg'

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
            <div className="sponser-area pt-24 pb-16 h-80">
                <div className="container mx-auto text-center ">
                    <div className="flex justify-around">
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
            {/* section */}
            <section className="">
  <div className="relative h-full w-full z-[-1] text-center text-white">
    <img src={collaborators} className="w-full h-full bg-contain bg-repeat"/>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <h2 className="text-white text-3xl font-bold">AND THANKS YOU ALL COLLABORATORS</h2>
      <br />
      <h1 className="text-white text-5xl font-bold">COLLABORATORS!</h1>
    </div>
  </div>
</section>



        </div>
    );
};

export default Home;
