function konversi() {
  const c = parseFloat(document.getElementById("celsius").value);
  const f = (c * 9) / 5 + 32;
  document.getElementById("fahrenheit").innerText = f.toFixed(2);
}
