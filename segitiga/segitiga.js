const alas = document.getElementById("fr-alas")
const tinggi = document.getElementById("fr-tinggi");
const sisi1 = document.getElementById("fr-sisi1");
const sisi2 = document.getElementById("fr-sisi2");
const sisi3 = document.getElementById("fr-sisi3");
const btnhitung = document.getElementById("btn-hitung");
const luas = document.getElementById("txt-luas");
const keliling = document.getElementById("txt-keliling");

const luassegitiga = (a,t,s1,s2,s3) =>  1/2 * a * t
const kelilingsegitiga = (a,t,s1,s2,s3) => s1 + s2 + s3

btnhitung.addEventListener("click", function (){
  let a = alas.value
  let t = tinggi.value
  let s1 = sisi1.value
  let s2 = sisi2.value
  let s3 = sisi3.value

  luas.textContent = luassegitiga(a,t,s1,s2,s3)
  keliling.textContent = kelilingsegitiga(a,t,s1,s2,s3)
})