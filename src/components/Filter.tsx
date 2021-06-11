import React, { useState } from "react";
import styled from "styled-components";
import { handleScroll } from "../scroll/Scroll";

const Filter: React.FC<any> = ({ data, open }) => {
  const [input, setInput] = useState("");

  const filteredArray = data
    .map((x: any) => x.name)
    .filter((x: any) => x.includes(input));

  return (
    <>
      <Container open={open}>
        <FilterContainer>
          <Input
            type='text'
            placeholder='Filter...'
            onChange={(e: any) => setInput(e.target.value)}
            onKeyDown={(e: any) =>
              e.keyCode === 13 ? handleScroll(filteredArray[0]) : ""
            }
          ></Input>
          <MagnifyingGlass>🔍</MagnifyingGlass>
        </FilterContainer>
        <FilterFunctions>
          {filteredArray.map((f: any, i: number) => (
            <FunctionNavSelectorLink
              href={`#${f}`}
              onClick={(e: any) => {
                e.preventDefault();
                handleScroll(e.currentTarget.getAttribute("href"));
              }}
            >
              <FunctionNavSelector key={i}>{f}</FunctionNavSelector>
            </FunctionNavSelectorLink>
          ))}
        </FilterFunctions>
      </Container>
    </>
  );
};

const Container = styled.div<any>`
  position: sticky;
  top: 63px;
  height: 100%;
  width: auto;

  @media (max-width: 768px) {
    display: ${({ open }: any) => (open ? "block" : "none")};
    transform: ${({ open }: any) =>
      open ? "translateX(0vw)" : "translateX(-100vw)"};
  }
`;

const FilterContainer = styled.div`
  position: sticky;
  margin: 0.5rem 1rem 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 6px 12px;
  line-height: 1.5;
  border: none;
  font-size: 1rem;
  &:focus {
    box-shadow: 0px 0px 8px 2px #f7df1e;
    outline: #f7df1e solid 1px;
  }
`;

const FilterFunctions = styled.ul`
  height: calc(100vh - 125px);
  overflow-y: auto;
  list-style-type: none;
`;

const FunctionNavSelector = styled.li`
  cursor: pointer;
  padding: 5px 12px;
  color: #000;
  text-decoration: none;
  margin-left: 1rem;
  &:hover {
    background: #e4e4e4;
  }
`;

const FunctionNavSelectorLink = styled.a`
  color: #000;
  text-decoration: none;
`;

const MagnifyingGlass = styled.span`
  position: absolute;
  top: 5px;
  right: 2px;
`;

export default Filter;
