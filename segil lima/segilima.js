const sisi = document.getElementById("sisi");
const tinggi = document.getElementById("tinggi");
const hitung = document.getElementById("perhitungan");
const luas = document.querySelector("#luas");
const keliling = document.querySelector("#keliling");

const hitungluas = (s, t) => (5 * s * t) / 2;
const hitungkeliling = (s) => 5 * s;

hitung.addEventListener("click", function () {
  luas.textContent = hitungluas(sisi.value, tinggi.value);
  keliling.textContent = hitungkeliling(sisi.value);
});
