function hitungRata() {
  const input = document.getElementById("angka").value;
  const angkaArray = input.split(",").map(Number);
  const total = angkaArray.reduce((a, b) => a + b, 0);
  const rata = total / angkaArray.length;
  document.getElementById("hasil").innerText = "Rata-rata: " + rata;
}
