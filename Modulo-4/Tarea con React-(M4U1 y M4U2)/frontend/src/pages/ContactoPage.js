import '../styles/components/pages/normalize.css';
import '../styles/components/pages/Estilos.css';
import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="contenedor-dos contacto">
            <h2> Envianos tu Consulta:</h2>
            <div className="metodo-uno">
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre:</label>
                        <input type="text" placeholder="nombre y apellido" name="" />
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input type="text" name="" placeholder="usuario@example.com" />
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
            <h2>Nos encontramos en:</h2>
            <div className="metodo-dos">
                <div className="direccion">
                    <h4>PROVINCIA:<span>Buenos Aires</span></h4>
                    <h4>CIUDAD:<span>Mar del Plata</span></h4>
                    <h4>CALLE:<span>Saavedra 1166</span></h4>
                    <h4>TELEFONO:<span>2234 94 1655</span></h4>
                </div>
            </div>
            <h2>Nuestras Redes Sociales:</h2>
            <div className="metodo-tres">
                <div className="canales">
                    <div className="canal"><img src="img/contacto/face.jpg" alt="facebook" /></div>
                    <div className="canal"><img src="img/contacto/what.jpg" alt="whatsapp" /></div>
                    <div className="canal"><img src="img/contacto/insta.jpg" alt="instagram" /></div>
                    <div className="canal"><img src="img/contacto/twit.jpg" alt="twitter" /></div>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;