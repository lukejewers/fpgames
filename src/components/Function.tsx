import React from "react";
import styled from "styled-components";

const Function: React.FC<any> = ({ f }) => {
  return (
    <Wrapper>
      <h1>{f.name}</h1>
      <Type>
        {f.name} :: {f.type}
      </Type>
      <div className=''>{f.function}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 0 1px #ccc;
`;

const Type = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 0.125rem;
  padding: 0.5rem 1rem;
`;

export default Function;
