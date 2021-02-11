import "./CardsList.scss";
import Cards from "../Cards";
import Pagination from "../Pagination";

const CardsList = ({ charactersList }) => {
  const renderCharacter = (character) => (
    <Cards key={character.id} {...character} />
  );
  // TODO: try to display the error, which comes from the api call
  return charactersList.length > 0 ? (
    <div className="CardsList">
      {charactersList.map(renderCharacter)}
      <Pagination pages={4} />
    </div>
  ) : (
    <div className="CardsList__404">Ooooopppps, something wrong</div>
  );
};

export default CardsList;
