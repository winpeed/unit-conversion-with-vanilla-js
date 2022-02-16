const userInput = document.getElementById("user-input");

const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kiloPound = document.getElementById("kilo-pound");

userInput.value = 10;
doCalculation();

userInput.addEventListener("change", doCalculation);
userInput.addEventListener("keyup", doCalculation);

function doCalculation() {
  if (userInput.value == "") {
    userInput.value = 0;
  }

  meterFeet.innerHTML = ` <p>${userInput.value} meters = ${(
    Number(userInput.value) * 3.2808399
  ).toFixed(3)} feet <br/> ${userInput.value} feet = ${(
    Number(userInput.value) / 3.2808399
  ).toFixed(3)} meters</p>`;

  literGallon.innerHTML = ` <p>${userInput.value} liters = ${(
    Number(userInput.value) * 0.264172052
  ).toFixed(3)} gallons <br/> ${userInput.value} gallons = ${(
    Number(userInput.value) / 0.264172052
  ).toFixed(3)} liters</p>`;

  kiloPound.innerHTML = ` <p>${userInput.value} kilos = ${(
    Number(userInput.value) * 2.20462262
  ).toFixed(3)} pounds <br/> ${userInput.value} pounds = ${(
    Number(userInput.value) / 2.20462262
  ).toFixed(3)} kilos</p>`;
}
