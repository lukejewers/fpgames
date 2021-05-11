import React from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Lib from "./components/Lib";
import data from "./data/functions.json";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Filter data={data} />
      <Lib data={data} />
    </>
  );
};

export default App;
