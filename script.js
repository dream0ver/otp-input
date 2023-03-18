const inputs = [...document.getElementsByTagName("input")];
const fetchInputs = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", (e) => {
      const isNumber = e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58;
      if (isNumber && i < inputs.length - 1) {
        inputs[i + 1].focus();
      } else if (e.key == "Backspace") {
        inputs[i].value = "";
        if (i > 0) {
          inputs[i - 1].focus();
        }
      }
    });
    inputs[i].addEventListener("keydown", (e) => {
      const isNumber = e.key.charCodeAt(0) > 47 && e.key.charCodeAt(0) < 58;
      if (!isNumber) {
        e.preventDefault();
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
