const output = document.querySelector(".output");
const input = document.getElementById("input");

function romanNumeral(inInt) {
  const reference = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var r,
    outRoman = "";
  for (r in reference) {
    while (inInt >= reference[r]) {
      outRoman += r;
      inInt -= reference[r];
    }
  }
  return outRoman;
}

function showResults() {
  const inputInt = parseInt(input.value);
  if (inputInt < 1 || inputInt > 3999 || isNaN(inputInt) ) {
    return;
  }
  const result = romanNumeral(inputInt);
  output.innerHTML = "";
  output.innerHTML = `<h3>You input the number <b>${inputInt}</b></h3>`;
  output.innerHTML += `<p>The resulting roman numeral is: ${result}</p>`;
}

function startOver() {
  //clear input box and displayed output
  input.value = "";
  output.innerHTML = "<h3>Output will appear here...</h3>";
}
