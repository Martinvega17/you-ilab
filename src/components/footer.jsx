import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-8 bg-dark-900 text-white">
            <div className="container-fluid text-center bg-azul-footer">
                <div className="grid grid-cols-3 gap-4 ml-5 mr-5">
                    <div className="col-span-1 mt-5">
                        <h3 className="text-lg font-bold mb-5">YOUTH INNOVATION LABORATORY</h3>
                        <p className="mb-5">The You-i Lab is hosted by the National Supercomputing Center (CNS) in San Luis Potosí, which is a state-of-the-art HPC research facility that focuses on the development of large scale industrial projects. The CNS that is managed by the Instituto Potosino de Investigación Científica y Tecnológica (IPICYT).</p>
                    </div>
                    <div className="col-span-1 mt-5">
                        <h3 className="text-lg font-bold mb-5">USEFUL LINKS</h3>
                        <ul className="navbar-nav">
                            <li className="nav-item me-3 mb-4">
                                <a className="nav-link text-white hover:text-gray-300" href="#https://conahcyt.mx/" target="_blank" rel="noopener noreferrer">CONACYT</a>
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
                    <div className="col-span-1 mt-5 mb-40">
                        <h3 className="text-lg font-bold mb-5">CONTACT</h3>
                        <p className="mb-1">Camino a la Presa San José 2055, Lomas</p>
                        <p className="mb-1">4 sección San Luis Potosí, 78216 SLP, México.</p>
                        <p className="mb-1">you-i.lab@ipicyt.edu.mx</p>
                        <p className="mb-5">(444) 834-2000 ext. 2117</p>
                        <span className="icon-wrapper">
                            <a href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
                            </a>
                        </span>
                        <span className="icon-wrapper">
                            <a href="https://twitter.com/">
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="icon" />
                            </a>
                        </span>
                        <span className="icon-wrapper">
                            <a href="https://www.linkedin.com/">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
                            </a>
                        </span>
                        <span className="icon-wrapper">
                            <a href="tel:+524448342000">
                                <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
                            </a>
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
