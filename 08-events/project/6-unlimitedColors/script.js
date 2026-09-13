// generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = function () {
  document.body.style.backgroundColor = randomColor();
};

let intervalId;

const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 500);
    console.log(intervalId)
  }
};

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("start").addEventListener("click", startChangeColor);
document.getElementById("stop").addEventListener("click", stopChangeColor);
