import '../styles/components/pages/normalize.css';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <main className="contenedor-dos">
      <div className="caja">
        <section className="intro">
          <div>
            <h2>Introducción</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus debitis harum laudantium laboriosam non perferendis odit itaque accusantium ut nulla! Excepturi, rerum facilis! Voluptatem beatae nisi dolore, fuga molestiae blanditiis!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptas dicta magnam hic nesciunt omnis, quis quod ipsum, saepe asperiores tempora! Recusandae perferendis unde ut nihil sapiente error quibusdam debitis!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure aut quam fugit voluptate. Laudantium voluptate rerum dolorum optio nam? Doloribus distinctio aperiam, sed architecto vero sapiente quis tempora nihil?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odio quos. Iure, nobis voluptate sed impedit soluta quibusdam labore dicta rerum cum optio culpa, explicabo sunt doloremque libero delectus corrupti.</p>
          </div>
        </section>
        <div className="fondo">
          <img src="/img/inicio/car3.jpg" alt="Auto-Clasico" />
        </div>
      </div>

      <div>
        <section className="reseña">
          <h2>Reseña</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus debitis harum laudantium laboriosam non perferendis odit itaque accusantium ut nulla! Excepturi, rerum facilis! Voluptatem beatae nisi dolore, fuga molestiae blanditiis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam molestiae ducimus accusamus placeat voluptatibus. Soluta aspernatur ex consequuntur autem tenetur architecto. Odit quaerat dicta officia velit dignissimos alias omnis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptas dicta magnam hic nesciunt omnis, quis quod ipsum, saepe asperiores tempora! Recusandae perferendis unde ut nihil sapiente error quibusdam debitis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla iure aut quam fugit voluptate. Laudantium voluptate rerum dolorum optio nam? Doloribus distinctio aperiam, sed architecto vero sapiente quis tempora nihil?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odio quos. Iure, nobis voluptate sed impedit soluta quibusdam labore dicta rerum cum optio culpa, explicabo sunt doloremque libero delectus corrupti.</p>
        </section>
        <div className="fondodos">
          <img src="/img/inicio/fondocar2.jpg" alt="Auto-Clasico" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;