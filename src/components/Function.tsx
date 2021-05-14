import React from "react";
import styled from "styled-components";

const Function: React.FC<any> = ({ f }) => {
  return (
    <Container>
      <h1>{f.name}</h1>
      <Type>
        <Bold>{f.name}</Bold> : : {f.type}
      </Type>
      <Description>{f.description}</Description>
      <div>
        <Bold>
          <p>{f.function}</p>
          <p>{f.alternative}</p>
        </Bold>
      </div>
      <GreyDiv>
        <p>
          {">"} {f.application}
        </p>
        <p>{f.return}</p>
      </GreyDiv>
      {f.link ? <div className=''>See also {f.link}</div> : ""}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 0 1px #ccc;
  & > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Type = styled.div`
  background-color: #f2f2f2;
  border-bottom: 3px solid #e5e5e5;
  padding: 0.5rem 1rem;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const GreyDiv = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 0.125rem;
  padding: 0.5rem 1rem;
`;

const Description = styled.p`
  padding-left: 1rem;
  border-left: 1px solid gainsboro;
`;

export default Function;
