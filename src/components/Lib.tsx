import React from "react";
import Function from "./Function";
import styled from "styled-components";

const Lib: React.FC<any> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((f: any) => (
        <Function f={f} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-left: 1px solid #ccc;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

export default Lib;
