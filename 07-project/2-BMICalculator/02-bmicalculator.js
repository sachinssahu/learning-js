const form = document.querySelector("form");
// this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height: ${height}`;
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight: ${weight}`;
    result.style.color = "red";
  } else {
    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    Math.round();
    result.innerHTML = `BMI is ${bmi} for height: ${height}cm and weight: ${weight}kg`;
  }
});
