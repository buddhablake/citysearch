import React from "react";
import { CitiesProvider } from "./context/CitiesContext";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar";
import "./style.css";

const App = () => {
  return (
    <CitiesProvider>
      <div className="App bg-gray-600 min-h-screen">
        <SearchBar />
        <SearchResults />
      </div>
    </CitiesProvider>
  );
};

export default App;
