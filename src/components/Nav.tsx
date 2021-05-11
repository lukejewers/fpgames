import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Div>
      <h1>Joogle</h1>
      <h2>GitHub</h2>
    </Div>
  );
};

const Div = styled.div`
  position: sticky;
  background-color: ${(props) => props.theme.javascriptYellow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
`;

export default Nav;
