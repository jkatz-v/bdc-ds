const wheelContainer = document.getElementById("wheel-container");
let computedStyle = getComputedStyle(wheelContainer);
let wheelWidth =
  wheelContainer.offsetWidth -
  parseFloat(computedStyle.paddingRight) -
  parseFloat(computedStyle.paddingLeft);
let wheelHeight =
  wheelContainer.offsetHeight -
  parseFloat(computedStyle.paddingTop) -
  parseFloat(computedStyle.paddingBottom);

const drawLines = () => {
  const linesSVG = document.getElementById("lines");
  wheelWidth =
    wheelContainer.offsetWidth -
    parseFloat(computedStyle.paddingRight) -
    parseFloat(computedStyle.paddingLeft);
  wheelHeight =
    wheelContainer.offsetHeight -
    parseFloat(computedStyle.paddingTop) -
    parseFloat(computedStyle.paddingBottom);

  linesSVG.setAttribute("width", wheelWidth);
  linesSVG.setAttribute("height", wheelHeight);

  const upperLeftLine = document.getElementById("upperLeftLine");
  upperLeftLine.setAttribute("x1", wheelWidth / 2);
  upperLeftLine.setAttribute("y1", wheelHeight / 2);
  upperLeftLine.setAttribute("x2", wheelWidth / 8);
  upperLeftLine.setAttribute("y2", 0);

  const upperRightLine = document.getElementById("upperRightLine");
  upperRightLine.setAttribute("x1", wheelWidth / 2);
  upperRightLine.setAttribute("y1", wheelHeight / 2);
  upperRightLine.setAttribute("x2", wheelWidth - wheelWidth / 8);
  upperRightLine.setAttribute("y2", 0);

  const bottomRightLine = document.getElementById("bottomRightLine");
  bottomRightLine.setAttribute("x1", wheelWidth / 2);
  bottomRightLine.setAttribute("y1", wheelHeight / 2);
  bottomRightLine.setAttribute("x2", wheelWidth);
  bottomRightLine.setAttribute("y2", wheelHeight - (wheelHeight / 5) * 2);

  const bottomLine = document.getElementById("bottomLine");
  bottomLine.setAttribute("x1", wheelWidth / 2);
  bottomLine.setAttribute("y1", wheelHeight / 2);
  bottomLine.setAttribute("x2", wheelWidth / 2);
  bottomLine.setAttribute("y2", wheelHeight);

  const bottomLeftLine = document.getElementById("bottomLeftLine");
  bottomLeftLine.setAttribute("x1", wheelWidth / 2);
  bottomLeftLine.setAttribute("y1", wheelHeight / 2);
  bottomLeftLine.setAttribute("x2", 0);
  bottomLeftLine.setAttribute("y2", wheelHeight - (wheelHeight / 5) * 2);

  const h1s = document.querySelectorAll("h1");
  const h2s = document.querySelectorAll("h2");

  h1s.forEach((h1) => (h1.style.fontSize = "15cqh"));
};

drawLines();
new ResizeObserver(drawLines).observe(wheelContainer);

let mobile = true;

const slices = document.querySelectorAll(".slice");
const stages = document.querySelectorAll("div.inner-circle div:not(.FiveFive)");
const innerCircle = document.querySelector("div.inner-circle");
const five = document.querySelector(".FiveFive");
const ring = document.querySelector(".inner-ring");
const contents = document.querySelectorAll(".slice-content");

const onHoverHandler = (i) => {
  const bgSlice = document.querySelector(`.slice-0${i + 1}`);
  bgSlice.classList.remove("BGFadeIn");
  bgSlice.classList.add("BGFadeOut");

  ring.classList.remove("FadeOut");
  ring.classList.add("FadeIn");
  ring.style.transform = `rotate(${i * 72}deg)`;
  ring.classList.remove("clip-01", "clip-02", "clip-03", "clip-04", "clip-05");
  ring.classList.add(`clip-0${i + 1}`);

  stages.forEach((stage, j) => {
    if (j == i) {
      stage.classList.add("stage-hover");
    } else {
      stage.classList.remove("stage-hover");
    }
  });
};

const focusHandler = (i) => {
  onHoverHandler(i);
  contents.forEach((content, j) => {
    if (i == j) content.classList.add("selected");
    else content.classList.remove("selected");
  });

  five.classList.add("FadeOutAndMoveDown");

  stages.forEach((stage, j) => {
    if (j == i) stage.classList.add("stage-center");
    else stage.classList.remove("stage-center");
  });

  innerCircle.classList.add("stage-selected");
};

const resetWheel = () => {
  contents.forEach((content) => content.classList.remove("selected"));
  slices.forEach((slice) => slice.classList.remove("FadeOut"));
  stages.forEach((stage) => stage.classList.remove("stage-center"));
  innerCircle.classList.remove("stage-selected");
  five.classList.remove("FadeOutAndMoveDown");
};

const onHoverOutHandler = (i) => {
  const bgSlice = document.querySelector(`.slice-0${i + 1}`);
  bgSlice.classList.remove("BGFadeOut");
  bgSlice.classList.add("BGFadeIn");
  ring.classList.remove("FadeIn");
  ring.classList.add("FadeOut");

  stages.forEach((stage, j) => {
    if (j == i) {
      stage.classList.remove("stage-hover");
    }
  });
};

slices.forEach((slice, i) => {
  slice.addEventListener("mouseover", (e) => focusHandler(i));
  slice.addEventListener("mouseout", (e) => onHoverOutHandler(i));
  slice.addEventListener("click", (e) => focusHandler(i));
});

contents.forEach((content, i) =>
  content.addEventListener("click", (e) => focusHandler(i))
);

wheelContainer.addEventListener("mouseout", (e) => {
  resetWheel();
});

const angle = (cx, cy, ex, ey) => {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
};

// document.addEventListener("mousemove", (e) => {
//   const box = innerCircle.getBoundingClientRect();
//   const centerX = (box.left + box.right) / 2;
//   const centerY = (box.top + box.bottom) / 2;
//   console.log(angle(centerX, centerY, e.pageX, e.pageY));
// });
