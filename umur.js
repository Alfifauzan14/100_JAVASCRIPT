function hitungumur() {
  const tahun =
  parseInt(document.getElementById("tahunLahir").value);
  const sekarang = new Date().getFullYear();
  const umur = sekarang - tahun;
  document.getElementById("umur").innerText = "umur: " + umur + " tahun";
}