import "./Cards.scss";
import Tag from "../Tag";
import { useHistory, Link } from "react-router-dom";
import * as PropTypes from "prop-types";

const Cards = ({ id, name, status, gender, species, type, origin, location, image, episode, url, created }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/character/${id}`);
  return (
    <div className="Cards">
      <Link to={`/character/${id}`}>
        <img src={image} className="Cards__img" alt="" />
      </Link>
      <div className="Cards__info">
        <Link to={`/character/${id}`}>
          <h1 onClick={handleClick}>{name}</h1>
        </Link>
        <Tag className="Cards__tag" title={gender} />

        <Tag className="Cards__tag" title={status} />

        <p className="Cards__label">Last known location:</p>
        <p className="Cards__value">Post-Apocalyptic Earth</p>

        <p className="Cards__label">First seen in:</p>
        <p className="Cards__value">Rickmancing the Stone</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  origin: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Cards;
