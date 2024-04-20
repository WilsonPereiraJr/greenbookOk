import React from "react";
import "./styles.css";
const SearchBar = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return (
    <div className="search-b">
      <input
        className="search-b"
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="digite para pesquisar um nome de planta, sintomas, metabólitos secundários..."
      ></input>
    </div>
  );
};

export default SearchBar;
