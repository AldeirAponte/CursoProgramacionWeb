import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="contenedor-dos">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsa assumenda recusandae optio commodi corporis, incidunt temporibus dolor veritatis, tenetur expedita itaque quam? Neque, omnis eius. Mollitia neque eius placeat.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempore omnis ab sed? Non modi sapiente enim impedit hic nobis. Sunt, velit. Iure odio voluptas a minus! Excepturi, voluptas possimus</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut quidem corrupti explicabo accusantium quae fuga, perspiciatis exercitationem modi alias tempora esse, quam harum cumque assumenda magnam! Nam, nostrum. Aut.</p>
            </div>
            <div className="nosotros">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Martin Diaz" />
                        <div>
                            <h3>Martin Diaz</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iure beatae deserunt aliquid asperiores facilis at, saepe architecto repellendus repudiandae eos ullam? Dicta magnam sunt quod alias modi dolorum eos?</p>
                        </div>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="Erika Diaz" />
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