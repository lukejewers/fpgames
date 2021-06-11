import React from "react";
import Function from "./Function";
import styled from "styled-components";
import { FunctionProps } from "../types/types";

const Lib: React.FC<{ data: FunctionProps[] }> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((f: FunctionProps, i: number) => (
        <Function f={f} key={i} />
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
