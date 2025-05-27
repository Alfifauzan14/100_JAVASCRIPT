function jumlahkan() {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const hasil = a + b;
  document.getElementById("hasil").innerText = "Hasil: " + hasil;
}
