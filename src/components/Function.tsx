import React from "react";
import styled from "styled-components";
import { handleScroll } from "../scroll/Scroll";

const Function: React.FC<any> = ({ f }) => {
  return (
    <Container id={f.name}>
      <h1>{f.name}</h1>
      <Type>
        <Bold>{f.name}</Bold> : : {f.type}
      </Type>
      <Description>{f.description}</Description>
      <Repl>
        <FunctionWrapper>
          {f.alternative === null ? (
            <>
              <p>
                <Const>const</Const> {f.name} = {f.function}
              </p>
            </>
          ) : (
            <>
              <p>
                <Const>let</Const> {f.name} = {f.function}
              </p>
              <p>
                <Const>let</Const> {f.name} = {f.alternative}
              </p>
            </>
          )}
        </FunctionWrapper>
        <br />
        <p>
          <Arrow>{">"}</Arrow> <FunctionName>{f.name}</FunctionName>
          {f.arguments}
        </p>
        <p>
          <Return>{f.return}</Return>
        </p>
      </Repl>
      {f.link ? (
        <div>
          See also{" "}
          <FunctionLink href={`#${f.link}`} onClick={handleScroll}>
            {f.link}
          </FunctionLink>
          .
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: auto;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 0 1px #ccc;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
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

const FunctionWrapper = styled.div``;

const Const = styled.span`
  color: #d73a49;
`;

const Arrow = styled.span`
  color: #245cc5;
`;
const FunctionName = styled.span`
  color: #6f42c1;
`;

const Return = styled.span`
  color: #274d79;
`;

const Repl = styled.div`
  background-color: #f6f8fa;
  border-radius: 0.125rem;
  padding: 0.5rem 1rem;
`;

const Description = styled.p`
  padding-left: 1rem;
  border-left: 1px solid gainsboro;
`;

const FunctionLink = styled.a`
  color: #3273dc;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;

export default Function;
