const diagonal1 = document.getElementById("fr-diagonal1")
const diagonal2 = document.getElementById("fr-diagonal2");
const sisia = document.getElementById("fr-sisi1");
const sisib = document.getElementById("fr-sisi2");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const luaslayang = (d1,d2,a,b) => d1 * d2
const kelilinglayang = (d1,d2,a,b) => 2 * ( a + b )

btnhitung.addEventListener("click", function (){
  let d1 = diagonal1.value
  let d2 = diagonal2.value
  let a = sisia.value
  let b = sisib.value

  luas.textContent = luaslayang(d1,d2,a,b)
  keliling.textContent = kelilinglayang(d1,d2,a,b)
})