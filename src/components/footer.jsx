import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-8 bg-dark-900 text-white bg-azul-footer" style={{ height: '100%', width: '100%' }}>
            <div className="container mx-auto text-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-5">
                    <div className="mt-5 lg:ml-40 md:ml-0">
                        <h3 className="text-lg font-bold mb-5 title-footer">YOUTH INNOVATION LABORATORY</h3>
                        <p className="mb-5">The You-i Lab is hosted by the National Supercomputing Center (CNS) in San Luis Potosí, which is a state-of-the-art HPC research facility that focuses on the development of large scale industrial projects. The CNS that is managed by the Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
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
                                <a className="nav-link text-white hover:text-gray-300" href="#Contact" target="_blank" rel="noopener noreferrer">DBM</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 mb-40 lg:text-left md:text-center lg:mr-52 sm:mr-0">
                        <h3 className="text-lg font-bold mb-5 title-footer ml-12">CONTACTO</h3>
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

                        <div className="col-xl-3 col-lg-3 lg:text-left md:text-center">
                            <div className="footer-widget opening-hour-widget">
                                <h4 className="title-footer text-lg font-bold mb-5 ml-12 ">Redes</h4>
                                <div className="social-links">
                                    <span className="icon-wrapper rounded-full inline-grid border-white border">
                                        <a href="https://www.facebook.com/">
                                            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon p-2" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper rounded-full inline-grid border-white border">
                                        <a href="https://twitter.com/">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" className="icon p-2" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper rounded-full inline-grid border-white border">
                                        <a href="https://www.linkedin.com/">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon p-2" />
                                        </a>
                                    </span>
                                    <span className="icon-wrapper rounded-full inline-grid border-white border">
                                        <a href="tel:+524448342000">
                                            <FontAwesomeIcon icon={faPhone} size="2x" className="icon p-2" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-white text-md text-center">
                        <p>Powered by <b>You I Lab</b> - 2023</p>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
