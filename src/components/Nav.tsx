import React from "react";
import styled from "styled-components";

const Nav: React.FC<any> = ({ open, setOpen }) => {
  return (
    <NavContainer>
      <NavItems>
        <NavBurger onClick={() => setOpen(!open)}>
          <svg viewBox='0 0 100 80' width='30' height='30'>
            <rect width='100' height='18'></rect>
            <rect y='30' width='100' height='18'></rect>
            <rect y='60' width='100' height='18'></rect>
          </svg>
        </NavBurger>
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          FP JS
        </h1>
        <NavInspo>
          {">"} Functional Vanilla Javascript Functions (inspired by{" "}
          <NavLink href='https://ramdajs.com/docs/#identity' target='_blank'>
            Ramda
          </NavLink>
          ,{" "}
          <NavLink href='https://hoogle.haskell.org/' target='_blank'>
            Hoogle
          </NavLink>{" "}
          &{" "}
          <NavLink
            href='https://you-dont-need.github.io/You-Dont-Need-Lodash-Underscore/#/'
            target='_blank'
          >
            You Don't Need Lodash
          </NavLink>
          )
        </NavInspo>
        <GitLink href='https://github.com/lukejewers/joogle' target='_blank'>
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            height='100%'
            width='100%'
          >
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
          </svg>
        </GitLink>
      </NavItems>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${(props) => props.theme.javascriptYellow};
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 950px;
  padding: 0.75rem 1.5rem;
  margin: auto;
`;

const NavBurger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

const NavInspo = styled.p`
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #3273dc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const GitLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1.25rem;
  height: 20px;
  width: 20px;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
`;

export default Nav;
