import "./Search.scss";

const Search = ({
  className,
  value,
  setValue,
}) => {
  const handleChange = ({
    target: { value },
  }) => {
    setValue(value);
  };
  return (
    <div
      className={`Search__${className}`}
    >
      <input
        className="Search__input"
        placeholder="Search by name"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
