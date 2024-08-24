import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilter }) => {
  return (
    <div>
      <label>
        <span className={css.searchBox}>Find contacts by name:</span>
        <br />
        <input type="text" value={filterValue} onChange={handleFilter} />
      </label>
    </div>
  );
};

export default SearchBox;
