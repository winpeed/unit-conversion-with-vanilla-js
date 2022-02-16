const userInput = document.getElementById("user-input");

const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kiloPound = document.getElementById("kilo-pound");

userInput.value = 10;

let convertNumber;

doCalculation();

userInput.addEventListener("change", doCalculation);
userInput.addEventListener("keyup", doCalculation);

function doCalculation() {
  if (userInput.value == "") {
    convertNumber = 0;
  }

  convertNumber = userInput.value;

  meterFeet.innerHTML = ` <p>${Number(convertNumber)} meters = ${(
    Number(convertNumber) * 3.2808399
  ).toFixed(3)} feet <br/> ${Number(convertNumber)} feet = ${(
    Number(convertNumber) / 3.2808399
  ).toFixed(3)} meters</p>`;

  literGallon.innerHTML = ` <p>${Number(convertNumber)} liters = ${(
    Number(convertNumber) * 0.264172052
  ).toFixed(3)} gallons <br/> ${Number(convertNumber)} gallons = ${(
    Number(convertNumber) / 0.264172052
  ).toFixed(3)} liters</p>`;

  kiloPound.innerHTML = ` <p>${Number(convertNumber)} kilos = ${(
    Number(convertNumber) * 2.20462262
  ).toFixed(3)} pounds <br/> ${Number(convertNumber)} pounds = ${(
    Number(convertNumber) / 2.20462262
  ).toFixed(3)} kilos</p>`;
}
