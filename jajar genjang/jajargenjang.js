const alas = document.getElementById("fr-alas")
const tinggi = document.getElementById("fr-tinggi");
const sisi1 = document.getElementById("fr-sisi1");
const sisi2 = document.getElementById("fr-sisi2");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");


const luasjajar = (t,a,s1,s2) => a * t
const kelilingjajar = (t,a,s1,s2) => 2 * ( 1 + 2 )

btnhitung.addEventListener("click", function (){
  let a = alas.value
  let t = tinggi.value
  let s1 = sisi1.value
  let s2 = sisi2.value

  luas.textContent = luasjajar(t,a,s1,s2)
  keliling.textContent = kelilingjajar(t,a,s1,s2)
})