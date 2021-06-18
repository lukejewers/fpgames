export const createRunKit = (a: any, b: any, c: any, d: any, e: any) => {
  const tail = (xs: any[]) => xs.slice(-(xs.length - 1));
  const init = (xs: any[]) => xs.slice(0, xs.length - 1);
  const last = (xs: any[]) => xs.slice(-1)[0];

  const letNodesToStrings = (node: Node) =>
    tail(node.textContent.split("let ")).map((x: string) => "let " + x);

  const addHeadComment = (x: any[]) => {
    const lastElem = last(x);
    const subArr = init(["// "].concat(x)).join("");
    return [subArr].concat(lastElem);
  };

  const toRunKitSource = (y: any[]) => (x: any[]) => y.concat(x).join("\n");

  const wrapper = document.createElement("div");

  window.RunKit.createNotebook({
    element: wrapper,
    gutterStyle: a.getAttribute("data-gutter"),
    source: c
      ? toRunKitSource(addHeadComment(letNodesToStrings(c)))(d.textContent)
      : toRunKitSource([b.textContent])(d.textContent),

    onLoad: () => a.remove(),
  });

  a.parentNode.insertBefore(wrapper, e);
};
