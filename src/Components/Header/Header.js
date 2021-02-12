import "./Header.scss";
import { ReactComponent as RickMortylogo } from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <h1>
        <span>surf the</span>
        <NavLink exact to="/">
          <RickMortylogo />
        </NavLink>
        <span> universe</span>
      </h1>
    </div>
  );
};

export default Header;
