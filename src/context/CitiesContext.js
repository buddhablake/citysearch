import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const CitiesContext = createContext();

export const CitiesProvider = (props) => {
  const [cities, setCities] = useState();
  const [searchResults, setSearchResults] = useState();

  const filterCities = (e) => {
    //persist the event for use in filter below
    e.persist();

    if (e.target.value === "") {
      setSearchResults(false);
      return;
    }

    //filter cities array for search city names matching search query
    const filteredCities = cities.filter((city) => {
      const cityAndState = `${city.city}, ${city.state}`;
      return cityAndState.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSearchResults(filteredCities);
  };

  const sortCities = (cityList) => {
    cityList = cityList.sort((a, b) => (a.city > b.city ? 1 : -1));
    return cityList;
  };

  useEffect(() => {
    const getCities = async () => {
      //fetch cities
      const res = await axios.get(
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
      );

      //sort cities alphabetically
      const sortedCities = sortCities(res.data);

      //update value of cities hook
      setCities(sortedCities);
    };
    getCities();

    return () => {
      //cleanup
    };
  }, []);

  return (
    <CitiesContext.Provider value={{ searchResults, filterCities, cities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};
