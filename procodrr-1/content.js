let video;
const shortcuts = {
  Space(e) {
    e.preventDefault();
    if (video.paused) video.play();
    else video.pause();
  },
  ArrowLeft(e) {
    document.querySelector("#bmpui-id-1").click();
  },
  ArrowRight(e) {
    document.querySelector("#bmpui-id-2").click();
  },
  ArrowUp(e) {
    e.preventDefault();
    if (video.volume < 1) video.volume += 0.1;
  },
  ArrowDown(e) {
    e.preventDefault();
    if (video.volume > 0) video.volume -= 0.1;
  },
  BracketLeft(e) {
    video.playbackRate -= 0.1;
  },
  BracketRight(e) {
    video.playbackRate += 0.1;
  },
  KeyD(e) {
    document.body.classList.add("dark");
  },
  KeyL(e) {
    document.body.classList.remove("dark");
  },
  KeyI(e) {
    document.querySelector("#bmpui-id-65").click();
  },
  KeyF(e) {
    document.querySelector("#bmpui-id-70").click();
  },
};

var themeToggleBtn = document.createElement("div");
themeToggleBtn.classList.add("btn-container");

window.addEventListener("keydown", (e) => {
  console.log(e.code);
  shortcuts[e.code]?.(e);
});

const targetNode = document.getElementById("root");

const target = document.body;

const tracker = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (!document.body.classList.contains("dark")) {
        themeToggleBtn.innerHTML = `
        <button id="darkbtn" onclick="document.body.classList.add('dark')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
            </svg>
        </button>
    `;

        console.log("dark-btn");
      } else {
        themeToggleBtn.innerHTML = `
        <button id="lightbtn" onclick="document.body.classList.remove('dark')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
            </svg>
        </button>
    `;
      }
      accountPic.prepend(themeToggleBtn);
    }
  }
});

const config = { attributes: true, attributeFilter: ["class"] };
tracker.observe(target, config);

const observer = new MutationObserver(() => {
  const goBackElement = targetNode.querySelector(".go_back img");

  if (goBackElement) {
    goBackElement.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-arrow-left'%3E%3Cline x1='19' y1='12' x2='5' y2='12'%3E%3C/line%3E%3Cpolyline points='12 19 5 12 12 5'%3E%3C/polyline%3E%3C/svg%3E";
  }

  const accountPic = document.querySelector(".avtar-timeing");
  console.log("rendering");

  if (!document.body.classList.contains("dark")) {
    themeToggleBtn.innerHTML = `
    <button id="darkbtn" onclick="document.body.classList.add('dark')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
        </svg>
    </button>
`;

    console.log("dark-btn");
  } else {
    themeToggleBtn.innerHTML = `
    <button id="lightbtn" onclick="document.body.classList.remove('dark')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
        </svg>
    </button>
`;
    console.log("light-btn");
  }

  const playbutton = document.querySelector("#play");

  if (playbutton) {
    playbutton.click();
  }

  video = document.querySelector("video");

  if (video != null || themeToggleBtn != null) {
    console.log(video);

    video.play().catch(function (error) {
      console.log("Error tring to play the video:", error);
    });

    accountPic.prepend(themeToggleBtn);

    observer.disconnect();
  }
});

observer.observe(targetNode, { childList: true, subtree: true });
