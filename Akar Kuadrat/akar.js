const angka = document.getElementById("angka");
const akarkuadrat = document.getElementById("akarkuadrat");
const btnakarkuadrat = document.getElementById("btn-akarkuadrat");
const isiangka = document.getElementById("isiangka");
function hitungangka(a) {
  return a ** 0.5;
}

btnakarkuadrat.addEventListener("click", function () {
  isiangka.textContent = angka.value;
  akarkuadrat.textContent = hitungangka(angka.value);

  isiangka.style.textDecoration = "underline";
  akarkuadrat.style.textDecoration = "underline";
});
