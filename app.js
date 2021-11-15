function checkInp(selector) {
  let x = document.querySelector(selector).value;
  if (!/^\d+$/.test(document.querySelector("selector").value)) {
    alert("Mueranse");
  }
}

document.querySelector("#suma").addEventListener("keypress", checkInp("#suma"));
