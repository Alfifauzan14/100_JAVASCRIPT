function modulus() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("hasil").innerText = "Sisa: " + (a % b);
}
