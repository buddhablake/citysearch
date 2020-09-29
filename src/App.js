import React from "react";
import { CitiesProvider } from "./context/CitiesContext";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <CitiesProvider>
      <div className="App">
        <SearchResults />
      </div>
    </CitiesProvider>
  );
};

export default App;
