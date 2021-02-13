import "./DetailedUser.scss";
import Tag from "../../Components/Tag";
import {
  NavLink,
  useParams,
} from "react-router-dom";
import {
  useEffect,
  useState,
} from "react";
import {
  getCharacter,
  getCharacters,
} from "../../API";
import Search from "../../Components/Search";
import Header from "../../Components/Header";

const DetailedUser = () => {
  const { id } = useParams();
  const [
    character,
    setCharacter,
  ] = useState({
    name: "Loading...",
    status: "Loading...",
    species: "Loading...",
    type: "Loading...",
    gender: "Loading...",
    origin: "Loading...",
    location: {
      name: "Loading...",
      url: "Loading...",
    },
    image: "",
    episode: [],
    url: "Loading...",
    created: "Loading...",
    error: undefined,
  });

  const {
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    created,
    error,
  } = character || {};

  useEffect(() => {
    loadCharacters(id).then((r) => r);
  }, [character]);

  const loadCharacters = async (
    characterId
  ) => {
    const info = await getCharacter(
      characterId
    );

    setCharacter(info);
  };

  console.log(character);

  return character ? (
    <div>
      <div className="DetailedUser">
        <div className="DetailedUser__head">
          <Header className="DetailedUser__header" />
        </div>

        <div className="DetailedUser__links">
          <NavLink
            exact
            to="/"
            className="DetailedUser__link "
            activeClassName="DetailedUser__link__active"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/character"
            className="DetailedUser__link DetailedUser__link__active"
            activeClassName="DetailedUser__link__active"
          >
            | #{id} {name}
          </NavLink>
        </div>
        <div className="DetailedUser__ImageContainer">
          <img
            src={image}
            className="DetailedUser__Image"
            alt=""
          />
        </div>

        <div className="DetailedUser__Description">
          <h1>
            #{id} {name}
          </h1>
          <div className="Description__tag">
            <Tag title={gender} />
            <Tag title={status} />
          </div>

          <div className="DetailedUser__Maininfo">
            {/*Decide not to break on components, because it used only there and no more*/}
            <p className="DetailedUser__infoLabel">
              Species
            </p>
            <p className="DetailedUser__infovalue">
              {character.species}
            </p>
            <p className="DetailedUser__infoLabel">
              Origin
            </p>
            <p className="DetailedUser__infovalue">
              {character.origin.name}
            </p>
            <p className="DetailedUser__infoLabel">
              Birthday
            </p>
            <p className="DetailedUser__infovalue">
              {character.created}
            </p>
            <p className="DetailedUser__infoLabel">
              Last Known location:
            </p>
            <p className="DetailedUser__infovalue">
              Earth (Replacement
              Dimension)
            </p>
            <p className="DetailedUser__infoLabel">
              First seen in:
            </p>
            <p className="DetailedUser__infovalue">
              Edge of Tomorty: Rick,
              Die, Rickpeat
            </p>
          </div>
          <div className="DetailedUser__Episods">
            <p className="DetailedUser__infoLabel">
              Episodes:
            </p>
            <p className="DetailedUser__infovalue">
              S03E07: The Ricklantis
              Mixup
            </p>
            <p className="DetailedUser__infovalue">
              S01E10: Close
              Rick-counters of the Rick
              Kind
            </p>
            <p className="DetailedUser__infovalue">
              S03E07: The Ricklantis
              Mixup
            </p>
            <p className="DetailedUser__infovalue">
              S01E10: Close
              Rick-counters of the Rick
              Kind{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DetailedUser">
      Error #404: Not found
    </div>
  );
};

export default DetailedUser;
