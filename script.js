const inputs = [...document.getElementsByTagName("input")];
const fetchInputs = () => {
  const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      if (NUMBERS.includes(e.key) && i < inputs.length - 1) {
        inputs[i + 1].focus();
      } else if (e.key == "Backspace" && i > 0) {
        inputs[i - 1].focus();
      } else if (!NUMBERS.includes(e.key)) {
        inputs[i].value = "";
      }
    });
  }
  document.getElementById("btn").addEventListener("click", (e) => {
    let result = [];
    inputs.forEach((element) => {
      if (element.value) {
        result.push(element.value);
      }
    });
    if (result.length == inputs.length) {
      alert(`OTP ${result.join("")} successfully validated.`);
    }
  });
};
