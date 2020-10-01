import React from "react";

const CityCard = ({ cityData }) => {
  const {
    city,
    growth_from_2000_to_2013,
    latitude,
    longitude,
    population,
    state,
  } = cityData;
  return (
    <div
      className="bg-gray-700 p-4 rounded-lg font-montserrat shadow-md"
      style={{ width: "100%", maxWidth: "800px" }}
    >
      <h2 className="text-2xl text-yellow-400 font-bold mb-3">
        {city}, {state}
      </h2>
      <ul className="text-gray-200 tracking-wider grid gap-1 font-light">
        <li>Population: {population}</li>
        <li>Growth From Year 2000 To 2013: {growth_from_2000_to_2013}</li>
        <li>Latitude: {latitude}</li>
        <li>Longitude: {longitude}</li>
      </ul>
    </div>
  );
};

export default CityCard;
