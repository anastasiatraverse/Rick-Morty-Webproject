import "./DetailedUser.scss";
import Tag from "../../Components/Tag";
import CardLogo from "../assets/Card_logo.png";

const DetailedUser = () => {
  return (
    <div className="DetailedUser">
      <div className="DetailedUser__ImageContainer">
        <img src={CardLogo} className="DetailedUser__Image" />
      </div>

      <div className="DetailedUser__Description">
        <h1>#2 Public Opinion Judge</h1>
        <div className="Description__tag">
          <Tag />
          <Tag />
        </div>

        <div className="DetailedUser__Maininfo">
          <p class="DetailedUser__infoLabel">Species</p>
          <p class="DetailedUser__infovalue">Human</p>
          <p class="DetailedUser__infoLabel">Origin</p>
          <p class="DetailedUser__infovalue">Earth</p>
          <p class="DetailedUser__infoLabel">Birthday</p>
          <p class="DetailedUser__infovalue">10 Jun 2020</p>
          <p class="DetailedUser__infoLabel">Last Known location:</p>
          <p class="DetailedUser__infovalue">Earth (Replacement Dimension)</p>
          <p class="DetailedUser__infoLabel">First seen in:</p>
          <p class="DetailedUser__infovalue">
            Edge of Tomorty: Rick, Die, Rickpeat
          </p>
        </div>
        <div className="DetailedUser__Episods">
          <p class="DetailedUser__infoLabel">Episodes:</p>
          <p class="DetailedUser__infovalue">S03E07: The Ricklantis Mixup</p>
          <p class="DetailedUser__infovalue">
            S01E10: Close Rick-counters of the Rick Kind
          </p>
          <p class="DetailedUser__infovalue">S03E07: The Ricklantis Mixup</p>
          <p class="DetailedUser__infovalue">
            S01E10: Close Rick-counters of the Rick Kind{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedUser;
