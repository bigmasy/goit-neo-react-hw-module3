import { useId } from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ filter, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        id={searchId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
