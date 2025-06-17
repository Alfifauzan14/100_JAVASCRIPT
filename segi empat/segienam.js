const sisi = document.getElementById("sisi");
const tinggi = document.getElementById("tinggi");
const hitung = document.getElementById("perhitungan");
const luas = document.querySelector("#luas");
const keliling = document.querySelector("#keliling");

const hitungluas = (s, t) => (3 * Math.sqrt(3) * s * s) / 2;
const hitungkeliling = (s) => 6 * s;

hitung.addEventListener("click", function () {
  luas.textContent = hitungluas(sisi.value, tinggi.value);
  keliling.textContent = hitungkeliling(sisi.value);
});
