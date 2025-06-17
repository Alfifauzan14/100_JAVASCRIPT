function toKelvin() {
  let c = parseFloat(document.getElementById("c").value);
  let k = c + 273.15;
  document.getElementById("hasil").innerText = `Suhu: ${k} K`;
}
