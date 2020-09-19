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

makeShade(
  light.offsetLeft + light.clientWidth / 2,
  light.offsetTop + light.clientHeight / 2,
  SHADOW_COLOR
);
