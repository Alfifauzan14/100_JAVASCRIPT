function ubahWarna() {
  let warna = ["red", "blue", "green", "yellow", "pink", "purple"];
  document.body.style.backgroundColor =
    warna[Math.floor(Math.random() * warna.length)];
}
