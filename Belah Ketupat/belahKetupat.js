const diagonal1 = document.getElementById("fr-diagonal1")
const diagonal2 = document.getElementById("fr-diagonal2");
const sisi = document.getElementById("fr-sisi");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");


const luasTabung = (d1,d2,s) => 1/2 * d1 * d2
const kelilingTabung = (d1,d2,s) => 4 * s

btnhitung.addEventListener("click", function (){
  let d1 = diagonal1.value
  let d2 = diagonal2.value
  let s = sisi.value

  luas.textContent = luasTabung(d1,d2,s)
  keliling.textContent = kelilingTabung(d1,d2,s)
})