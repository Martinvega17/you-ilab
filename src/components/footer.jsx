/**
 * The above code is a React component that renders a footer section with contact information, useful
 * links, and social media icons.
 * 
 * @return The Footer component is returning a JSX element representing the footer section of a
 * website.
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-8 bg-dark-900 text-white bg-azul-footer h-full w-full">
            <div className="container mx-auto text-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mx-5">
                    <div className="mt-5 lg:ml-40 md:ml-0">
                        <h3 className="text-lg font-bold mb-5 title-footer">YOUTH INNOVATION LABORATORY</h3>
                        <p className="mb-5">El You-i Lab está alojado en el Centro Nacional de Supercómputo (CNS) de San Luis Potosí, que es una instalación de investigación HPC de vanguardia que se centra en el desarrollo de proyectos industriales a gran escala. El CNS que está gestionado por el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-bold mb-5 title-footer">USEFUL LINKS</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item me-3 mb-4">
                                <a className="nav-link text-white hover:text-gray-300" href="https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">CONACYT</a>
                            </li>
                            <li className="nav-item me-3 mb-4">
                                <a className="nav-link text-white hover:text-gray-300" href="https://www.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">IPICYT</a>
                            </li>
                            <li className="nav-item me-3 mb-4">
                                <a className="nav-link text-white hover:text-gray-300" href="https://cns.ipicyt.edu.mx/" target="_blank" rel="noopener noreferrer">CNS</a>
                            </li>
                            <li className="nav-item me-3 mb-4">
                                <a className="nav-link text-white hover:text-gray-300" href="https://bit.ly/division-biologia-molecular" target="_blank" rel="noopener noreferrer">DBM</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 mb-14 lg:text-left md:text-center lg:mr-52 sm:mr-0">
                        <h3 className="text-lg font-bold mb-5 title-footer md:ml-20">CONTACTO</h3>
                        <p>
                            <FontAwesomeIcon icon={faRocket} />
                            <span className="ml-2">
                                Camino a la Presa de San José 2055, Lomas 4a Sección, 78216 San Luis Potosí, S.L.P., México.
                            </span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +52 444 834 2000</span>
                        </p>
                        <p className="mb-10">
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                            <span className="ml-2"> you-i.lab@ipicyt.edu.mx</span>
                        </p>
                        <div className="lg:text-left md:text-center">
                            <div className="footer-widget opening-hour-widget">
                                <h4 className="title-footer text-lg font-bold mb-5 md:ml-20">Redes</h4>
                                <div className="social-links">
                                    <span className="icon-wrapper ">
                                        <a href="https://www.facebook.com/">
                                            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon p-2 rounded-full inline-grid border-white border" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper">
                                        <a href="https://twitter.com/">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" className="icon p-2 rounded-full inline-grid border-white border" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper">
                                        <a href="https://www.linkedin.com/">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon p-2 rounded-full inline-grid border-white border" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper">
                                        <a href="tel:+524448342000">
                                            <FontAwesomeIcon icon={faPhone} size="2x" className="icon p-2 rounded-full inline-grid border-white border" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col items-center mt-10">
                    <p className="text-center text-md mb-4">
                        © 2023 You i Lab. All rights reserved.
                    </p>
                    <p className="text-center text-md">
                        Powered by <b>You I Lab</b> - 2023
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
