const sisi = document.getElementById("fr-sisi")
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const luaspersegi = (s) => s * s
const kelilingpersegi = (s) => 4 * s

btnhitung.addEventListener("click", function (){
  let s = sisi.value

  luas.textContent = luaspersegi(s)
  keliling.textContent = kelilingpersegi(s)
})