import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo_you_i_lab from '../assets/logos/logo-you-i_lab.png';
import logo_cns from '../assets/logos/logo-cns.png';
import logo_ipicyt from '../assets/logos/logo-ipicyt.png';

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="relative bg-azul-claro">
            <div className="relative top-full left-0 right-0 bg-white bg-transparent md:relative md:flex md:items-center md:justify-center md:py-4 sm:py-7 py-7 md:space-x-8">
                <ul className="md:flex">
                    <li className="nav-item mr-8">
                        <NavLink
                            to="/you-ilab/"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item mr-8">
                        <NavLink
                            to="/you-ilab/about"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                        >
                            Nosotros
                        </NavLink>
                    </li>
                    <li className="nav-item mr-8">
                        <NavLink
                            to="/you-ilab/projects"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                        >
                            Proyectos
                        </NavLink>
                    </li>
                    <li className="nav-item mr-5">
                        <NavLink
                            to="/you-ilab/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500 font-bold text-lg underline' : 'text-blue-800 font-bold text-lg'
                            }
                            activeClassName="active"
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto px-4 py-0 lg:py-2 md:py-3">
                <div className="absolute top-0 left-6 flex items-start justify-start mt-0 mr-0">
                    <Link to="/" className="contents">
                        <img className="text-white text-lg font-semibold h-20 w-full ml-2" src={logo_you_i_lab} alt="Logo" />
                    </Link>
                    {/* boton */}
                </div>
            </div>
            <div className="container mx-auto px-4 py-0 md:py-0">
                <div className="absolute top-0 right-0 flex items-end justify-end mt-0 mr-0">
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
