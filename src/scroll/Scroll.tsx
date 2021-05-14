export const handleScroll = (e: any) => {
  e.preventDefault();
  const el = document.querySelector(e.currentTarget.getAttribute("href"))
    .offsetTop;
  window.scrollTo({
    top: el - 72,
    behavior: "smooth",
  });
};
