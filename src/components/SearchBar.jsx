import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search a Repositories..."
      />
    </div>
  );
};
