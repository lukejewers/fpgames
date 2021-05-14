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
          />
          <span>🔍</span>
        </FilterWrapper>
        <div className='filter__functions'>
          {data
            .map((x: any) => x.name)
            .filter((x: any) => x.includes(input))
            .map((f: any, i: number) => (
              <FunctionNav key={i}>{f}</FunctionNav>
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
  padding: 0 1rem;
`;

const FilterWrapper = styled.div`
  position: sticky;
  margin: 1rem 0;
`;

const Input = styled.input`
  padding: 6px 12px;
`;

const FunctionNav = styled.div`
  cursor: pointer;
  &:hover {
    background: #e4e4e4;
    padding: 0;
  }
`;

export default Filter;
