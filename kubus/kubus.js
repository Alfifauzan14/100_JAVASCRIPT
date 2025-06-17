const sisi = document.getElementById("fr-sisi")
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const volume = document.getElementById("txt-volume");

const luaskubus = (s) => 6 * s
const volumekubus = (s) => s * 3

btnhitung.addEventListener("click", function (){
  let s = sisi.value

  luas.textContent = luaskubus(s)
  volume.textContent = volumekubus(s)
})