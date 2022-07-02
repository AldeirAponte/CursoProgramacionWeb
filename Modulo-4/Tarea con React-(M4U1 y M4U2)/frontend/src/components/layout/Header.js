import '../../styles/components/pages/normalize.css';
import '../../styles/components/layout/Layout.css';
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className="cabecera">
                <div className="logo">
                    <img src="img/inicio/logo1.jpg" alt="Logo" />
                </div>
                <div className="contenedor">
                    <div className="titulo">
                        <h1>Colección de Autos</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Inicio</NavLink></li>
                            <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</NavLink></li>
                            <li><NavLink to="/coleccion" className={({ isActive }) => isActive ? "activo" : undefined }>Colección</NavLink></li>
                            <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;