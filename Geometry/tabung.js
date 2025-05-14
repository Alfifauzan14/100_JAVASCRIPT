const tinggi = document.getElementById("fr-tinggi")
const jari = document.getElementById("fr-jari");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");

const PHI = 3.14
const luasTabung = (r, t) => (2 * (PHI * r * r)) + (PHI *2 * r * t)
const volumeTabung = (r, t) => PHI * r ** 2 * t

btnhitung.addEventListener("click", function (){
  let t = tinggi.value
  let r = jari.value

  luas.textContent = luasTabung(r, t)
  volume.textContent = volumeTabung(r, t)
})