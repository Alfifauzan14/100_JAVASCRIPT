const tinggi = document.getElementById("fr-tinggi")
const a1 = document.getElementById("fr-a");
const b2 = document.getElementById("fr-b");
const c3 = document.getElementById("fr-c");
const d4 = document.getElementById("fr-d");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const kelilingtrapesium = (T,a,b,c,d) => a + b + c + d
const luastrapesium = (T,a,b,c,d) => 1/2 * ( a + b ) * T

btnhitung.addEventListener("click", function (){
  let T = tinggi.value
  let a = a1.value
  let b = b2.value
  let c = c3.value
  let d = d4.value

  luas.textContent = luastrapesium(T,a,b,c,d)
  keliling.textContent = kelilingtrapesium(T,a,b,c,d)
})