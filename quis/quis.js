function cekJawaban(jawaban) {
  if (jawaban === "Jakarta") {
    document.getElementById("hasil").innerText = "Benar!";
  } else {
    document.getElementById("hasil").innerText = "Salah, coba lagi!";
  }
}
