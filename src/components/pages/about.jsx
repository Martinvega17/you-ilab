import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import team from '../../assets/team.jpg';
import Card from '../cards';


const About = () => {

    return (
        <div className='about_container'>
            <Helmet>
                <title>About us | You-i Lab</title>
            </Helmet>


            <div className="projects_search">
                <div className="container-fluid p-14 bg-slate-500 w-full h-full">
                    <h2 className='text-right text-5xl text-white nosotros mr-24'>Nosotros</h2>
                </div>

            </div>
            <div className="lg:ml-40 md:ml-5">

                <div className="row">
                    <div className="flex mt-8 mb-5">
                        <div className="about_content lg:mr-20 md:mr-5">
                            <h2 className="section_title text-5xl sm:text-2xl md:text-md lg:text-4xl xl:text-5xl mb-8 lg:mb-10 text-dark-blue">
                                Youth Innovation <br /> Laboratory
                            </h2>
                            <div className="about-left">
                                <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-h-lg xl:max-w-2xl">
                                    El Youth Innovation Laboratory (You-i Lab) es una iniciativa desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT) sin precedentes que sienta las bases para una participación de la población joven del país en la resolución de problemas sociales para beneficio de un mejor mañana.
                                </p>
                            </div>
                        </div>
                        {/* image */}
                        <div className="about_content lg:mr-52 md:mr-5">
                            <div className="about-left ">
                                <img src={team} className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl "></img>
                            </div>
                        </div>
                    </div>
                    {/* end image */}
                    <div className="flex mt-8 mb-5">
                        <div className="about_content2 mr-8">
                            <h2 className="section mb-8 text-dark-blue">Mision</h2>
                            <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                                Empoderar a la juventud a través del uso de las tecnologías de la información y la comunicación en el contexto de proyectos de impacto social.
                            </p>
                        </div>
                        <div className="about_content3 mr-8 ml-12">
                            <h2 className="section mb-8 text-dark-blue">Vision</h2>
                            <p className='max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
                                Contar con los mejores talentos y creativos interesados en gestionar y ejecutar proyectos interdisciplinarios innovadores centrados en el bienestar social.
                            </p>
                        </div>
                    </div>
                    <div className="about_content lg:mr-52 md:mr-5">
                        <h2 className="section_title text-5xl mb-10 text-dark-blue">
                            Historia</h2>
                        <div className="about-left ">
                            <p className=" mb-4">El laboratorio You+i del IPICYT (Instituto Potosino de Investigación Científica y Tecnológica) se fundó en 2013 con el objetivo de investigar y desarrollar tecnologías relacionadas con la interacción humano-máquina. Su nombre proviene de la combinación de la palabra "you" que hace referencia al usuario y la letra "i" de interfaz, buscando crear una "yuxtaposición" entre los seres humanos y la tecnología, a través del diseño de interfaces intuitivas y eficientes que mejoren la experiencia del usuario. Desde entonces, el laboratorio ha colaborado en diversos proyectos de investigación e innovación en este campo.</p>
                        </div>
                    </div>
                    <div className="content_team lg:mr-20 md:mr-5 mb-10">
                        <div className="content">
                            <div className="title_team">
                                <h2 className='inherit vertical-align about_us'>NUESTRO EQUIPO DE TRABAJO</h2>
                            </div>
                        </div>
                        {/* cards */}
                        <Card />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
