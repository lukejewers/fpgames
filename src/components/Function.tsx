import React, { useRef } from "react";
import styled from "styled-components";
import { handleScroll } from "../scroll/Scroll";
import { FunctionProps } from "../types/types";

const Function: React.FC<{ f: FunctionProps }> = ({ f }) => {
  const runKitRef = useRef<any>();
  const fDefRef = useRef<any>();
  const altFDefRef = useRef<any>();
  const fAppRef = useRef<any>();
  const fLinkRef = useRef<any>();

  const createRunKit = () => {
    const runKitRefEl = runKitRef.current;
    const fDefRefEl = fDefRef.current;
    const altFDefRefEl = altFDefRef.current;
    const fAppRefEl = fAppRef.current;
    const fLinkRefEl = fLinkRef.current;

    const wrapper = document.createElement("div");
    let tail = (xs: any[]) => xs.slice(-(xs.length - 1));
    let init = (xs: any[]) => xs.slice(0, xs.length - 1);
    let last = (xs: any[]) => xs.slice(-1)[0];

    const letNodesToStrings = (node: Node) =>
      tail(node.textContent.split("let ")).map((x: string) => "let " + x);

    const addHeadComment = (x: any[]) => {
      const lastElem = last(x);
      const subArr = init(["// "].concat(x)).join("");
      return [subArr].concat(lastElem);
    };

    const toRunKitSource = (y: any[]) =>
      y.concat(fAppRefEl.textContent).join("\n");

    window.RunKit.createNotebook({
      element: wrapper,
      gutterStyle: runKitRefEl.getAttribute("data-gutter"),
      source: altFDefRefEl
        ? toRunKitSource(addHeadComment(letNodesToStrings(altFDefRefEl)))
        : toRunKitSource([fDefRefEl.textContent]),

      onLoad: () => runKitRefEl.remove(),
    });

    runKitRefEl.parentNode.insertBefore(wrapper, fLinkRefEl);
  };

  return (
    <Container id={f.name}>
      <h1>{f.name}</h1>
      <Type>
        <Bold>{f.name}</Bold> : : {f.type}
      </Type>
      <Description>{f.description}.</Description>
      <Repl data-gutter='inside' ref={runKitRef} className='embed'>
        <FunctionWrapper>
          {f.alternative === null ? (
            <>
              <Definition ref={fDefRef}>
                <Const>const</Const> {f.name} = {f.function}
              </Definition>
              <RunKitREPL onClick={createRunKit}>Run Code Here</RunKitREPL>
            </>
          ) : (
            <>
              <div ref={altFDefRef}>
                <p>
                  <Const>let</Const> {f.name} = {f.function}
                </p>
                <p>
                  <Const>let</Const> {f.name} = {f.alternative}
                </p>
              </div>
              <RunKitREPL onClick={createRunKit}>Run Code Here</RunKitREPL>
            </>
          )}
        </FunctionWrapper>
        <br />
        <p ref={fAppRef}>
          <FunctionName>{f.name}</FunctionName>
          {f.arguments}
        </p>
        <p>
          <Arrow>{">"}</Arrow> <Return>{f.return}</Return>
        </p>
      </Repl>

      {f.link ? (
        <div ref={fLinkRef}>
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

const Definition = styled.p`
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
