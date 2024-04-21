import React from "react";
import "./styles.css";
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-b">
      <input
        className="search-b"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="digite para pesquisar um nome de planta, sintomas, metabólitos secundários..."
      ></input>
    </div>
  );
};

export default SearchBar;
