let interval;
function mulaiTimer() {
  clearInterval(interval);
  let sisa = parseInt(document.getElementById("detik").value);
  document.getElementById("waktu").innerText = sisa;
  interval = setInterval(() => {
    sisa--;
    document.getElementById("waktu").innerText = sisa;
    if (sisa <= 0) clearInterval(interval);
  }, 1000);
}
