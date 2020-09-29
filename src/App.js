import React from "react";
import { CitiesProvider } from "./context/CitiesContext";

const App = () => {
  return (
    <CitiesProvider>
      <div className="App">Hello</div>
    </CitiesProvider>
  );
};

export default App;
