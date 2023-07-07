import React from 'react';
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    return (
        <nav>
            <div className="bg-azul-claro m-0 p-0">
                <div className="container mx-auto px-4 py-0 md:py-0 flex items-center justify-between ml-1 ">
                    <div className="flex items-center">
                        <img className="text-white text-lg font-semibold h-20  w-full ml-1" src={logo_you_i_lab} alt="Logo" />
                    </div>
                    <ul className="navbar-nav hidden md:flex space-x-8 ml-12">
                        <li className="nav-item me-3">
                            <NavLink
                                to="/you-ilab/"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg '
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/you-ilab/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg '
                                }
                            >
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/you-ilab/projects"
                                className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg '
                            }
                        >
                                Proyectos
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink
                                to="/you-ilab/contact"
                                className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg '
                            }
                        >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                    <div className="absolute top-0 right-0 flex items-end justify-end hidden lg:flex mt-0 mr-0 ">
                        <div className="contents">
                            <img src={logo_cns} alt="logo cns" className="h-20 ml-2" id='cns' />
                            <img src={logo_ipicyt} alt="logo ipicyt" className="h-20 absolute left-0" id='logo-ipicyt' style={{ marginLeft: "-110px" }} />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="dropdown inline-block">
                            <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center">
                                <span id="currentLanguage" className="mr-1">Español</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M6 8l4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="languageMenu" className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick="langHandler('Español')">Español</a></li>
                                <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#" onClick="langHandler('1')">English</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
