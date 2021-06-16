import React, { useRef } from "react";
import styled from "styled-components";
import { handleScroll } from "../scroll/Scroll";
import { FunctionProps } from "../types/types";

const Function: React.FC<{ f: FunctionProps }> = ({ f }) => {
  const runKitRef = useRef<any>();
  const fLink = useRef<any>();

  const createRunKit = () => {
    const runKitRefEl = runKitRef.current;
    const wrapper = document.createElement("div");
    window.RunKit.createNotebook({
      element: wrapper,
      gutterStyle: runKitRefEl.getAttribute("data-gutter"),
      source: runKitRefEl.textContent.split(";").join("\n"),
      onLoad: () => runKitRefEl.parentNode.remove(),
    });

    const fLinkEl = fLink.current;
    runKitRefEl.parentNode.parentNode.insertBefore(wrapper, fLinkEl);
  };

  return (
    <Container id={f.name}>
      <h1>{f.name}</h1>
      <Type>
        <Bold>{f.name}</Bold> : : {f.type}
      </Type>
      <Description>{f.description}.</Description>
      <Repl>
        <FunctionWrapper>
          {f.alternative === null ? (
            <>
              <Expression>
                <Const>const</Const> {f.name} = {f.function}
              </Expression>
              <RunKitREPL onClick={createRunKit}>Run Code Here</RunKitREPL>
            </>
          ) : (
            <>
              <p>
                <Const>let</Const> {f.name} = {f.function}
              </p>
              <p>
                <Const>let</Const> {f.name} = {f.alternative}
              </p>
              <RunKitREPL onClick={createRunKit}>Run Code Here</RunKitREPL>
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
        {/* prettier-ignore */}
        <code data-gutter='inside' ref={runKitRef} className="embed" style={{display: 'none'}}>
          let {f.name} = {f.function};
          {f.name}{f.arguments}
        </code>
        {/* prettier-ignore */}
      </Repl>

      {f.link ? (
        <div ref={fLink}>
          See also{" "}
          <FunctionLink
            href={`#${f.link}`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault();
              handleScroll(e.currentTarget.getAttribute("href"));
            }}
          >
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

const FunctionWrapper = styled.div`
  position: relative;
`;

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

const Expression = styled.p`
  width: 80%;
`;

const RunKitREPL = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
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
