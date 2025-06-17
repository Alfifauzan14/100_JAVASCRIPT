function formatRupiah() {
  let angka = parseFloat(document.getElementById("angka").value);
  let rupiah = angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  document.getElementById("hasil").innerText = rupiah;
}
