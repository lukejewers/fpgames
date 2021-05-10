import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <H1>Joogle</H1>
    </div>
  );
};

const H1 = styled.h1`
  color: ${(props) => props.theme.javascriptYellow};
`;

export default Nav;
