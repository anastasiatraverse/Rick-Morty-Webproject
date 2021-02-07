import "./Tag.scss";
import deadTag from "../../assets/deadTag.png";

const Tag = ({ className, title }) => {
  return (
    <div className="Tag">
      <div className={`Tag ${className}`}>{title}</div>
    </div>
  );
};

export default Tag;
