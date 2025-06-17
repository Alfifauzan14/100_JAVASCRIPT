function hitung() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("op").value;
  let hasil;
  switch (op) {
    case "+":
      hasil = n1 + n2;
      break;
    case "-":
      hasil = n1 - n2;
      break;
    case "*":
      hasil = n1 * n2;
      break;
    case "/":
      hasil = n1 / n2;
      break;
    default:
      hasil = "Operator tidak valid";
  }
  document.getElementById("hasil").innerText = hasil;
}