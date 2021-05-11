import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Div>
      <H1>Joogle</H1>
      <H1>GitHub</H1>
    </Div>
  );
};

const Div = styled.div`
  position: sticky;
  background-color: ${(props) => props.theme.javascriptYellow};
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 2rem;
`;

const H1 = styled.h1`
  color: #000;
`;

export default Nav;
