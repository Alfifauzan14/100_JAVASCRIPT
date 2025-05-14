const lebar = document.getElementById("fr-lebar")
const panjang = document.getElementById("fr-panjang");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const luaspersegipanjang = (p,l) => p * l
const kelilingpersegipanjang = (p,l) => 2 * (p + l)

btnhitung.addEventListener("click", function (){
  let l = lebar.value
  let p = panjang.value

  luas.textContent = luaspersegipanjang(p,l)
  keliling.textContent = kelilingpersegipanjang(p,l)
})