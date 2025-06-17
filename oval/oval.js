const jariA = document.getElementById("jariA");
const jariB = document.getElementById("jariB");
const hitung = document.getElementById("perhitungan");
const luas = document.querySelector("#luas");
const keliling = document.querySelector("#keliling");

const hitungluas = (a, b) => Math.PI * a * b;
const hitungkeliling = (a, b) =>
  Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));

hitung.addEventListener("click", function () {
  luas.textContent = hitungluas(jariA.value, jariB.value);
  keliling.textContent = hitungkeliling(jariA.value, jariB.value);
});
