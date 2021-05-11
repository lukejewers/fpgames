import React from "react";
import styled from "styled-components";

const Filter: React.FC<any> = ({ data }) => {
  return (
    <>
      <Wrapper>
        <FilterWrapper>
          <input type='text' placeholder='Filter...' />
        </FilterWrapper>
        <div className='filter__functions'>
          {data.map((f: any) => (
            <p>{f.name}</p>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: sticky;
  height: 100%;
`;

const FilterWrapper = styled.div`
  position: sticky;
`;

export default Filter;
