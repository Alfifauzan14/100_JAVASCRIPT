function ubahKapital() {
  const teks = document.getElementById('teks').value;
  const hasil = teks.toUpperCase();
  document.getElementById('output').innerText = `Hasil: ${hasil}`;
}
