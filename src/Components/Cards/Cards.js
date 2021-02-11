import "./Cards.scss";
import Tag from "../Tag";
import { useHistory, Link } from "react-router-dom";
import * as PropTypes from "prop-types"; // TODO just: import PropTypes from "prop-types";

// TODO: fix import order.  Solve this by adding a corresponding eslint rule.

// TODO: clean up unused props
// don't leave rubbish in your code :)
// Solve this by adding an eslint rule
const Cards = ({
  id,
  name,
  status,
  gender,
  species,
  type,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  const history = useHistory();
  const handleClick = () => history.push(`/character/${id}`);
  return (
    <div className="Cards">
      {/* eslint-disable-next-line no-template-curly-in-string */}
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
  // TODO: delete it if uneeded, otherwise uncomment and fix
  // name: PropTypes.string.isRequired,
  // status: PropTypes.oneOf(["Unknown", "Alive", "Dead"]).isRequired,
  // gender: PropTypes.oneOf(["Male", "Female", "Unknown", "Genderless"]).isRequired,
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
