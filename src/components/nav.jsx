import React from 'react';
import logo_you_i_lab from '../assets/you-i_lab.png';
import logo_cns from '../assets/logo-cns.png';
import logo_ipicyt from '../assets/logo-ipicyt.png';


const Nav = () => {
    return (
        <nav>
            <div className="bg-azul-claro">
                <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between ml-1">
                    <div className="flex items-center">
                        <img className="text-white text-lg font-semibold h-23 w-23 ml-1" src={logo_you_i_lab} alt="Logo" />

                    </div>
                    <ul className="navbar-nav hidden md:flex space-x-8 ml-12">
                        <li className="nav-item me-3">
                            <a className="nav-link text-negro-claro hover:text-gray-300" href="#Inicio">Inicio</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-negro-claro hover:text-gray-300" href="#About">Sobre mi</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-negro-claro hover:text-gray-300" href="#Projects">Proyectos</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-negro-claro hover:text-gray-300" href="#Contact">Contacto</a>
                        </li>
                    </ul>
                    <div className="absolute top-0 right-0 flex items-end justify-end mt-3 mr-5">
                        <div className="contents">
                            <img src={logo_cns} alt="logo cns" className="h-20 ml-2" />
                            <img src={logo_ipicyt} alt="logo ipicyt" className="h-20 absolute left-0" style={{ marginLeft: "-110px" }} />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="dropdown inline-block">
                            <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center"
                                onClick="toggleDropdown()">
                                <span id="currentLanguage" className="mr-1">Español</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M6 8l4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="languageMenu" className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#" onClick="langHandler('Español')">Español</a></li>
                                <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"
                                    onClick="langHandler('1')">English</a></li>
                            </ul>
                        </div>





                    </div>
                </div>
                <div id="menuContainer" className="hidden md:block">
                    <hr className="border-gray-700 my-2" />
                </div>
            </div>
        </nav>

    );
};

export default Nav;
