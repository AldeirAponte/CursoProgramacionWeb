import { NavLink } from "react-router-dom";
import '../../styles/components/pages/normalize.css';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
  return (
    <header>
      <div className="contenedor">
        <img className="logo" src="/img/inicio/logo1.jpg" alt="logo" />
        <div className="titulo-navegacion">
          <h1>Colección de Autos</h1>
          <nav>
            <ul>
              <li>< NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Inicio</ NavLink></li>
              <li>< NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</ NavLink></li>
              <li>< NavLink to="/coleccion" className={({ isActive }) => isActive ? "activo" : undefined }>Colección</ NavLink></li>
              <li>< NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</ NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;