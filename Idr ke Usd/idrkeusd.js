function konversi() {
  const idr = parseFloat(document.getElementById("idr").value);
  const rate = 15000; // Mock kurs
  document.getElementById("usd").innerText = (idr / rate).toFixed(2);
}
