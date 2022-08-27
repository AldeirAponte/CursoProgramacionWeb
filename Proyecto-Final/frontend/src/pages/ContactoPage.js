// importamos las dependencias
import { useState } from 'react';
import axios from 'axios';

// importamos los estilos
import '../styles/components/pages/normalize.css';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value // forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  }

  return (
    <main className="contenedor-dos">
      <div className="contactos">
        <div className="metodo-uno">
          <div className="info">
            <h3>INFORMACION DE CONTACTO</h3>
            <p>info@gmail.com</p>
            <p>+541135017663</p>
          </div>
          <div className="titulo-form">
            <h2> Envianos tu Consulta:</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
              <p>
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="nombre y apellido" name="nombre" value={formData.nombre} onChange={handleChange} required />
              </p>
              <p>
                <label for="email">Email:</label>
                <input type="text" placeholder="usuario@example.com" name="email" value={formData.email} onChange={handleChange} required />
              </p>
              <p>
                <label for="telefono">Telefono:</label>
                <input type="text" placeholder="011 34758837" name="telefono" value={formData.telefono} onChange={handleChange} />
              </p>
              <p>
                <label for="consulta">Consulta:</label>
                <textarea rows="5" placeholder="Escribe aquí..." name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
              </p>
              <p>
                <input type="submit" value="Enviar" />
              </p>
              {sending ? <p>Enviando...</p> : null}
              {msg ? <p>{msg}</p> : null}
            </form>
          </div>
        </div>
        <div className="metodo-dos">
          <div className="ubicacion">
            <h2>Nos encontramos en:</h2>
            <div>
              <h4>PROVINCIA:<span>Buenos Aires</span></h4>
              <h4>CIUDAD:<span>Mar del Plata</span></h4>
              <h4>CALLE:<span>Saavedra 1166</span></h4>
              <h4>TELEFONO:<span>2234 94 1655</span></h4>
            </div>
          </div>
          <div className="redes-sociales">
            <h2>Nuestras Redes Sociales:</h2>
            <div className="canales">
              <img className="canal" src="/img/contacto/face.jpg" width="30px" alt="facebook" />
              <img className="canal" src="/img/contacto/what.jpg" width="30px" alt="whatsapp" />
              <img className="canal" src="/img/contacto/insta.jpg" width="30px" alt="instagram" />
              <img className="canal" src="/img/contacto/twit.jpg" width="30px" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactoPage;