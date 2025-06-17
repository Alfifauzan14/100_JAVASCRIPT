let waktu = 0,
  interval;
function mulai() {
  if (!interval) {
    interval = setInterval(() => {
      waktu += 0.1;
      document.getElementById("display").innerText = waktu.toFixed(1);
    }, 100);
  }
}
function berhenti() {
  clearInterval(interval);
  interval = null;
}
function reset() {
  waktu = 0;
  document.getElementById("display").innerText = "0.0";
  berhenti();
}
