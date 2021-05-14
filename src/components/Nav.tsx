import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <NavItems>
        <h1>Joogle</h1>
        <p>
          {">"} Functional Vanilla Javascript Functions (inspired by{" "}
          <NavLink href='https://ramdajs.com/docs/#identity' target='_blank'>
            Ramda
          </NavLink>{" "}
          &{" "}
          <NavLink href='https://hoogle.haskell.org/' target='_blank'>
            Hoogle
          </NavLink>
          )
        </p>
        <GitLink href='https://github.com/lukejewers/joogle' target='_blank'>
          <i className='fab fa-github fa-1x'></i>
        </GitLink>
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

const NavLink = styled.a`
  color: #3273dc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;

const GitLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.25rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Nav;
