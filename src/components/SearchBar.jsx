import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div className="searchBar">
      <input
        type="search"
        placeholder="Search Surah..."
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};

export default SearchBar;