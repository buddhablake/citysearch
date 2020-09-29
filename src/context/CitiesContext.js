import React, { createContext, useState } from "react";
import { getCities } from "../api";
export const CitiesContext = createContext();

export const CitiesProvider = (props) => {
  const [cities, setCities] = useState(getCities());

  return (
    <CitiesContext.Provider value={{ cities, setCities }}>
      {props.children}
    </CitiesContext.Provider>
  );
};
