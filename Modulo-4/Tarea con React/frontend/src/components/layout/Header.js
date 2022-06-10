import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div className="cabecera">
                <div className="imagen">
                    <img src="img/inicio/logo1.jpg" height="100" alt="logo" />
                </div>
                <div className="contenedor">
                    <div className="titulo">
                        <h1>Colección de Autos</h1>
                    </div>
                    <nav>
                        <ul>
                            <li className="activo"><Link to="/">Inicio</Link></li>
                            <li><Link to="nosotros">Nosotros</Link></li>
                            <li><Link to="coleccion">Colección</Link></li>
                            <li><Link to="contacto">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;