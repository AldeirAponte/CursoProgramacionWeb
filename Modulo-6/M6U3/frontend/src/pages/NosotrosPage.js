import '../styles/components/pages/normalize.css';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
  return (
    <main className="contenedor-dos">
      <div className="historia">
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsa assumenda recusandae optio commodi corporis, incidunt temporibus dolor veritatis, tenetur expedita itaque quam? Neque, omnis eius. Mollitia neque eius placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorum magnam? Explicabo provident placeat, nemo animi hic ab omnis suscipit expedita.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, odio, cumque similique sapiente corrupti maiores asperiores vero animi, reiciendis harum eos exercitationem ab tenetur minus officiis consequuntur voluptatum soluta aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perspiciatis reiciendis vitae nobis, suscipit quod tempore, minus autem eum voluptas, nulla itaque veritatis aut quaerat asperiores est quibusdam fuga voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto vitae quasi praesentium, facilis excepturi libero omnis adipisci asperiores nesciunt voluptate magnam ipsam magni fuga nisi, officiis minima debitis tenetur. Nesciunt!</p>
      </div>
      <div className="nosotros">
        <div className="persona">
          <img src="/img/nosotros/nosotros1.jpg" alt="Martin Diaz" />
          <div>
            <h3>Martin Diaz</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iure beatae deserunt aliquid asperiores facilis at, saepe architecto repellendus repudiandae eos ullam? Dicta magnam sunt quod alias modi dolorum eos?</p>
          </div>
        </div>
        <div className="persona">
          <img src="/img/nosotros/nosotros2.jpg" alt="Erika Diaz" />
          <div>
            <h3>Erika Diaz</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iure beatae deserunt aliquid asperiores facilis at, saepe architecto repellendus repudiandae eos ullam? Dicta magnam sunt quod alias modi dolorum eos?</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NosotrosPage;