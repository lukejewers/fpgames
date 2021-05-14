import React, { useState } from "react";
import styled from "styled-components";

const Filter: React.FC<any> = ({ data }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <Container>
        <FilterWrapper>
          <Input
            type='text'
            placeholder='Filter...'
            onChange={(e: any) => setInput(e.target.value)}
          ></Input>
          <MagnifyingGlass>🔍</MagnifyingGlass>
        </FilterWrapper>
        <div className='filter__functions'>
          {data
            .map((x: any) => x.name)
            .filter((x: any) => x.includes(input))
            .map((f: any, i: number) => (
              <FunctionNavSelectorLink href={`#${f}`}>
                <FunctionNavSelector key={i}>{f}</FunctionNavSelector>
              </FunctionNavSelectorLink>
            ))}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: sticky;
  top: 63px;
  height: 100%;
`;

const FilterWrapper = styled.div`
  position: sticky;
  margin: 1rem 0;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  &:focus {
    box-shadow: 5px 5px 15px 5px #000000 !important;
  }
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

const FunctionNavSelector = styled.div`
  cursor: pointer;
  padding: 5px 12px;
  color: #000;
  text-decoration: none;
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
