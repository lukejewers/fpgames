import React from "react";
import Function from "./Function";
import styled from "styled-components";

const Lib: React.FC<any> = ({ data }) => {
  return (
    <Wrapper>
      <h1>Lib</h1>
      {data.map((f: any) => (
        <Function f={f} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Lib;
