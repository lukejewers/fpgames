import React, { useState } from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Lib from "./components/Lib";
import data from "./data/functions.json";
import styled from "styled-components";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <Layout>
        <Filter data={data} open={open} />
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
