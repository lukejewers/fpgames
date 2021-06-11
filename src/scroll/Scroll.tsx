const filterEl = (el: any) =>
  el
    .split("")
    .filter((x: any) => x !== "#")
    .join("");

export const handleScroll = (el: any) => {
  const elOffset = document.getElementById(filterEl(el))!.offsetTop;
  window.scrollTo({
    top: elOffset - 65,
    behavior: "smooth",
  });
};
