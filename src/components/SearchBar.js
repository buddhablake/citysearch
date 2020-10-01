import React, { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

const SearchBar = () => {
  const { filterCities } = useContext(CitiesContext);

  return (
    <div className="grid justify-center h-64 py-12 bg-gray-700">
      <h1 className="text-center text-5xl text-gray-300 font-lato">
        City Search
      </h1>
      <input
        className="rounded text-xl text-gray-900 px-2 py-1 w-64 self-end outline-none focus:shadow-outline font-lato"
        type="text"
        onChange={filterCities}
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBar;
