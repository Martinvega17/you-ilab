import React from 'react';
import { Helmet } from 'react-helmet';


const About = () => {
    return (
        <div className='ml-2 mr-2'>
            <Helmet>
                <title>About us | You-i Lab</title>
            </Helmet>
            <div className="container-fluid p-14 bg-slate-500 w-full h-full">
                <h2 className='text-right text-5xl text-white nosotros mr-24'>Nosotros</h2>
            </div>
            <div className="ml-40 mr-52 ">
                <div className="row">
                    <div className="about_content">
                        <h2 className="section_title text-5xl mb-10 "
                        >Youth Innovation <br />Laboratory</h2>
                        <div className="about-left mr-52">
                            <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">El Youth Innovation Laboratory (You-i Lab) es una iniciativa desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT) sin precedentes que sienta las bases para una participación de la población joven del país en la resolución de problemas sociales para beneficio de un mejor mañana.</p>
                        </div>

                    </div>
                    <div className="flex mt-8 mb-5">
                        <div className="about_content2 mr-8">
                            <h2 className="section mb-8">Mision</h2>
                            <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                                Empoderar a la juventud a través del uso de las tecnologías de la información y la comunicación en el contexto de proyectos de impacto social.
                            </p>
                        </div>
                        <div className="about_content3 mr-6">
                            <h2 className="section mb-8">Vision</h2>
                            <p className='max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
                                Contar con los mejores talentos y creativos interesados en gestionar y ejecutar proyectos interdisciplinarios innovadores centrados en el bienestar social.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
