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
`;

export default Lib;
