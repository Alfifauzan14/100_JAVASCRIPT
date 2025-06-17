const jari = document.getElementById("fr-jari")
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");

const PHI = 3.14
const luasBola = (r) =>  4 * PHI * r**2
const volumeBola = (r) =>  4/3 * PHI * r**3

btnhitung.addEventListener("click", function (){
  let r = jari.value

  luas.textContent = luasBola(r)
  volume.textContent = volumeBola(r)
})