const light = document.getElementById("lightsource");
const SHADOW_COLOR = "#888";

const throwShade = (xPos, yPos, color) => {
  document.querySelectorAll(".shadow").forEach((el) => {
    const lightSourceXPosition =
      xPos || light.offsetLeft + light.clientWidth / 2;
    const lightSourceYPosition =
      yPos || light.offsetTop + light.clientHeight / 2;
    const leftDiff = lightSourceXPosition - el.offsetLeft + el.clientWidth / 2;
    const topDiff = lightSourceYPosition - el.offsetTop + el.clientHeight / 2;

    const left = (leftDiff / 10) * -1;
    const top = (topDiff / 10) * -1;

    const distance =
      Math.sqrt(Math.pow(leftDiff, 2) + Math.pow(topDiff, 2)) / 10;

    el.style.boxShadow = `${left}px ${top}px ${distance}px ${color}`;
  });
};

throwShade(
  light.offsetLeft + light.clientWidth / 2,
  light.offsetTop + light.clientHeight / 2,
  SHADOW_COLOR
);

export default throwShade;
