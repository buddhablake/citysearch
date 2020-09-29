import React, { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";

const SearchResults = () => {
  const { cities } = useContext(CitiesContext);
  console.log(cities);
  return <div>{cities && cities.map(({ city }) => <p>{city}</p>)}</div>;
};

export default SearchResults;
