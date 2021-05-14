import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <NavItems>
        <h1>Joogle</h1>
        <p>
          {">"} Functional Vanilla Javascript Functions (inspired by{" "}
          <a href='https://ramdajs.com/docs/#identity' target='_blank'>
            Ramda
          </a>{" "}
          &{" "}
          <a href='https://hoogle.haskell.org/' target='_blank'>
            Hoogle
          </a>
          )
        </p>
        <h3>GitHub</h3>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.javascriptYellow};
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 950px;
  padding: 0.75rem 2rem;
  margin: auto;
`;

export default Nav;
