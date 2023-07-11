import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';

const Nav = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-azul-claro relative">
            <div
                className={`absolute top-full left-0 right-0 bg-white md:bg-transparent md:relative md:flex md:items-center md:justify-center md:py-4 md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <ul className={`md:flex ${isMenuOpen ? 'flex-col space-y-4' : 'space-x-8'}`}>
                    <li className="nav-item">
                        <NavLink
                            to="/you-ilab/"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/you-ilab/about"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Nosotros
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/you-ilab/projects"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Proyectos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/you-ilab/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                            onClick={toggleMenu}
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto px-4 py-0 lg:py-2">
            <div className="absolute top-0 left-6 flex items-start justify-start hidden lg:flex mt-0 mr-0 ">
                    <Link to="/" className="contents">
                    <img className="text-white text-lg font-semibold h-20 w-full ml-2" src={logo_you_i_lab} alt="Logo" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-black focus:outline-none"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-8 h-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="w-8 h-8 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-0 md:py-0">
                <div className="absolute top-0 right-0 flex items-end justify-end hidden lg:flex mt-0 mr-0 ">
                    <div className="contents">
                        <img src={logo_cns} alt="logo cns" className="h-20 ml-2" id='cns' />
                        <img src={logo_ipicyt} alt="logo ipicyt" className="h-20 absolute left-0" id='logo-ipicyt' style={{ marginLeft: "-110px" }} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
