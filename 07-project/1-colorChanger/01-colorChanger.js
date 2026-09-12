const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// console.log(buttons);
// console.log(body);

buttons.forEach((buttons) => {
    console.log(buttons);
  buttons.addEventListener("click", function (e) {
    body.style.color = "white"
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black"
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black"
    } else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
