import '../../styles/components/pages/normalize.css';
import '../../styles/components/pages/ColeccionItem.css';

const ColeccionItem = (props) => {

  const { title, information, imagen } = props;

  return (
    <div className="columna">
      <h3>{title}</h3>
      <hr />
      <p>{information}</p>
      <img src={imagen} alt="Auto-Clásico" />
    </div>
  );
}

export default ColeccionItem;