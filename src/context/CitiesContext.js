import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

export const CitiesContext = createContext();

export const CitiesProvider = (props) => {
  const [cities, setCities] = useState();

  useEffect(() => {
    //Were we to be posting, updating, or deleting this data I would abstract this and other crud functions out into their own API file.
    const getCities = async () => {
      const res = await axios.get(
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
      );

      setCities(res.data);
    };
    getCities();

    return () => {};
  }, []);

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};
