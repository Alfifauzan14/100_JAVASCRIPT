function hitungDiskon() {
  const harga = parseFloat(document.getElementById("harga").value);
  const diskon = parseFloat(document.getElementById("diskon").value);
  const total = harga - (harga * diskon / 100);
  document.getElementById("total").innerText = "Total Bayar: Rp " + total.toFixed(2);
}
