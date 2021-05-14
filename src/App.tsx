import React from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Lib from "./components/Lib";
import data from "./data/functions.json";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Layout>
        <Filter data={data} />
        <Lib data={data} />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
