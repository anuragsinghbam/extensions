const shortcuts = {
  Space(e) {
    e.preventDefault();
    document.querySelector("#play")?.click();
    document.querySelector("#bmpui-id-61")?.click();
  },
  ArrowLeft(e) {
    document.querySelector("#bmpui-id-1").click();
  },
  ArrowRight(e) {
    document.querySelector("#bmpui-id-2").click();
  },
  KeyF(e) {
    document.querySelector("#bmpui-id-70").click();
  },
};

window.addEventListener("keydown", (e) => {
  shortcuts[e.code]?.(e);
});

const targetNode = document.getElementById("root");

const observer = new MutationObserver(() => {
  const goBackElement = targetNode.querySelector(".go_back img");
  if (goBackElement) {
    goBackElement.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-left'%3E%3Cline x1='19' y1='12' x2='5' y2='12'%3E%3C/line%3E%3Cpolyline points='12 19 5 12 12 5'%3E%3C/polyline%3E%3C/svg%3E";
  }
});

observer.observe(targetNode, { childList: true, subtree: true });
