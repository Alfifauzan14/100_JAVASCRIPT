const jari = document.getElementById("fr-jari")
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const PHI = 3.14
const luaslingkaran = (r) => PHI * r * r
const kelilinglingkaran = (r) => PHI * 2 * r

btnhitung.addEventListener("click", function (){
  let r = jari.value

  luas.textContent = luaslingkaran(r)
  keliling.textContent = kelilinglingkaran(r)
})