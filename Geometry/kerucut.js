const jari = document.getElementById("fr-jari")
const tinggi = document.getElementById("fr-tinggi");
const sisi = document.getElementById("fr-sisi");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const luasp = document.getElementById("txt-luasp");
const volume = document.getElementById("txt-volume");

const PHI = 3.14
const luaskerucut = (t,r,s) => ( PHI * r * s ) + ( PHI * r ** 2 )
const luaspkerucut = (t,r,s) => 1/3 * PHI * r ** 2 * t
const volumekerucut = (t,r,s) => PHI * r * s

btnhitung.addEventListener("click", function (){
  let t = tinggi.value
  let r = jari.value
  let s = sisi.value

  luas.textContent = luaskerucut(t,r,s)
  luasp.textContent = luaspkerucut(t,r,s)
  volume.textContent = volumekerucut(t,r,s)
})