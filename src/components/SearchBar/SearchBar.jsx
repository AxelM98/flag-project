import React from "react";
import "./searchBar.scss";

const SearchBar = ({ setInputText }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
