document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let R = +document.getElementById("rIn").value;
  let G = +document.getElementById("gIn").value;
  let B = +document.getElementById("bIn").value;

  let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

  document.getElementById("output").innerHTML = brightness;
  document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}
