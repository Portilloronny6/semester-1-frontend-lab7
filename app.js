const inputs = document.querySelectorAll("[type='number']");
const total = document.querySelector("#total");
const buttonSend = document.querySelector("#submit-button");

const inputValidator = {
  suma: false,
  terms: false,
  percentage: false,
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let name = e.target.getAttribute("name");

    if (e.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    }

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true;
    });

    if (allTrue) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }
  });
});

document.querySelector("#form-user").addEventListener("submit", function (e) {
  const suma = document.querySelector("#suma").value;
  const terms = document.querySelector("#terms").value;
  const percentage = document.querySelector("#percentage").value;

  total.value = (suma * (percentage / 100 / 12) * terms).toFixed(3);
  e.preventDefault();
});
