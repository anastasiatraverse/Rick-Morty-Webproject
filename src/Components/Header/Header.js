import "./Header.scss";
import { ReactComponent as RickMortylogo } from "../../assets/Logo.svg";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <h1>
        <span>surf the</span>
        <RickMortylogo />
        <span> universe</span>
      </h1>
    </div>
  );
};

export default Header;
