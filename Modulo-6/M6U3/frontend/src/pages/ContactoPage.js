import '../styles/components/pages/normalize.css';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
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
            <form action="" method="" className="formulario">
              <p>
                <label for="nombre">Nombre:</label>
                <input type="text" placeholder="nombre y apellido" name="" required />
              </p>
              <p>
                <label for="email">Email:</label>
                <input type="text" name="" placeholder="usuario@example.com" required />
              </p>
              <p>
                <label for="telefono">Telefono:</label>
                <input type="text" name="" placeholder="011 34758837" />
              </p>
              <p>
                <label for="consulta">Consulta:</label>
                <textarea name="" rows="5" placeholder="Escribe aquí..."></textarea>
              </p>
              <p>
                <input type="submit" value="Enviar" />
              </p>
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