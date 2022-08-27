import { useState, useEffect } from 'react';
import axios from 'axios';
import ColeccionItem from '../components/coleccion/ColeccionItem';
// importamos los estilos
import '../styles/components/pages/normalize.css';
import '../styles/components/pages/ColeccionPage.css';

const ColeccionPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [coleccion, setColeccion] = useState([]);

  useEffect(() => {
    const cargarColeccion = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/coleccion`);
      setColeccion(response.data);
      setLoading(false);
    };

    cargarColeccion();
  }, []);

  return (
    <main className="contenedor-dos">
      <div className='columnas'>
        {
          loading ? (
            <p>Cargando...</p>
          ) : (
            coleccion.map(item => <ColeccionItem key={item.id}
              title={item.titulo} information={item.informacion}
              imagen={item.imagen} />)
          )
        }
      </div>
    </main>
  );
};

export default ColeccionPage;