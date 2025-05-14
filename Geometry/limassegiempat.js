const alas = document.getElementById("fr-alas")
const tinggi = document.getElementById("fr-tinggi");
const sisi = document.getElementById("fr-sisi");
const sisitgk = document.getElementById("fr-sisiTgk");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");

const luaslimas = (a,t,s,st) => a + st
const volumelimas = (a,t,s,st) => 1/3 * a * t * s

btnhitung.addEventListener("click", function (){
  let a = alas.value
  let t = tinggi.value
  let s = sisi.value
  let st = sisitgk.value

  luas.textContent = luaslimas(a,t,s,st)
  volume.textContent = volumelimas(a,t,s,st)
})