import '../styles/components/pages/normalize.css';
import '../styles/components/pages/Estilos.css';
import React from "react";

const HomePage = (props) => {
    return (
        <main className="contenedor-dos">
            <div className="caja">
                <section className="intro">
                    <div>
                        <h2>Introducción</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptas dicta magnam hic nesciunt omnis, quis quod ipsum, saepe asperiores tempora! Recusandae perferendis unde ut nihil sapiente error quibusdam debitis!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum tempore assumenda soluta aliquid id, sed commodi tempora accusamus tenetur voluptatem voluptates facilis et voluptas, inventore odio ea dignissimos voluptate nihil?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptas dicta magnam hic nesciunt omnis, quis quod ipsum, saepe asperiores tempora! Recusandae perferendis unde ut nihil sapiente error quibusdam debitis!</p>
                    </div>
                </section>
                <div className="fondo">
                    <img src="img/inicio/car3.jpg" alt="Auto-Clasico" />
                </div>
            </div>

            <div>
                <section className="reseña">
                    <h2>Reseña</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dicta eius enim obcaecati voluptate vel id iste delectus consectetur in? Officiis accusamus id quae minima necessitatibus molestiae labore. Atque, cum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum excepturi dolorem nulla id eum eligendi eos, expedita doloremque est nobis quo sed itaque natus accusantium consequuntur veniam. Saepe, libero minima.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime autem temporibus excepturi exercitationem illum ex provident quod sed tempore nihil ut, cupiditate porro vel dolorum nostrum cumque labore recusandae?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est fuga enim magni, voluptatibus alias quod itaque soluta recusandae officiis eum molestiae qui aspernatur aperiam numquam quas velit et, nam placeat?</p>
                </section>
                <div className="fondodos">
                    <img src="img/inicio/fondocar2.jpg" alt="Auto-Clasico" />
                </div>
            </div>
        </main>
    );
}

export default HomePage;