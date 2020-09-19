const light = document.getElementById("lightsource");

const SHADOW_COLOR = "#888";

const makeShade = (xPos, yPos, color) => {
  document.querySelectorAll(".shadow").forEach((el) => {
    const leftDiff = xPos - el.offsetLeft + el.clientWidth / 2;
    const topDiff = yPos - el.offsetTop + el.clientHeight / 2;

    const left = (leftDiff / 10) * -1;
    const top = (topDiff / 10) * -1;

    const distance =
      Math.sqrt(Math.pow(leftDiff, 2) + Math.pow(topDiff, 2)) / 10;

    el.style.boxShadow = `${left}px ${top}px ${distance}px ${color}`;
  });
};

let active = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;

const dragStart = (e) => {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === light) {
    active = true;
  }
};

const dragEnd = () => {
  initialX = currentX;
  initialY = currentY;

  active = false;
};

const drag = (e) => {
  if (active) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, light);
    makeShade(currentX, currentY, SHADOW_COLOR);
  }
};

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
};

light.addEventListener("touchstart", dragStart, false);
light.addEventListener("touchend", dragEnd, false);
light.addEventListener("touchmove", drag, false);

light.addEventListener("mousedown", dragStart, false);
light.addEventListener("mouseup", dragEnd, false);
light.addEventListener("mousemove", drag, false);
