import "./Select.scss";
import { useState } from "react";

// TODO: import order

const Select = ({ value, handleSelect, options, label }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleIsOpened = () => setIsOpened(!isOpened);

  const onOptionClick = (option) => {
    handleSelect(option.value);
    setIsOpened(false);
  };

  const renderOptions = (option) => (
    <li
      key={option.value}
      value={option.value}
      className="Select__option"
      onClick={() => onOptionClick(option)}
    >
      {option.label}
    </li>
  );

  const selectedOption = options?.find((option) => option.value === value);
  console.log("> ", selectedOption); // TODO: we use console.log to debug, but better not to leave it in the committed code
  return (
    <div className="Select">
      <div className="Select__selectedOption" onClick={handleIsOpened}>
        <span className="Select__label">{label}</span>
        <span className="Select__value">{selectedOption?.label}</span>
      </div>
      {isOpened && (
        <ul className="Select__options">{options?.map(renderOptions)}</ul>
      )}
    </div>
  );
};
export default Select;
