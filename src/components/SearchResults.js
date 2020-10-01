import React, { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
import CityCard from "./CityCard";

const SearchResults = () => {
  const { searchResults, cities } = useContext(CitiesContext);
  console.log(cities);

  return (
    <div className="grid gap-6 justify-center mt-12 p-4">
      {!searchResults && (
        <p className="text-gray-200 text-3xl text-center tracking-wide font-lato">
          Start typing a city or state to begin.
        </p>
      )}

      {searchResults &&
        searchResults.map((cityData) => {
          return <CityCard cityData={cityData} key={cityData.latitude} />;
        })}

      {searchResults && !searchResults.length && (
        <p className="text-gray-200 text-3xl text-center tracking-wide font-lato">
          Nothing matches your query. Please try again.
        </p>
      )}
    </div>
  );
};

export default SearchResults;
