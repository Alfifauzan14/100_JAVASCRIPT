const output = document.getElementById("output");

function addSection(title, callback) {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  heading.textContent = title;
  section.appendChild(heading);

  const pre = document.createElement("pre");
  pre.style.whiteSpace = "pre-wrap";
  callback(pre);
  section.appendChild(pre);

  output.appendChild(section);
}

addSection("Tabel Perkalian 1-10", (pre) => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      pre.textContent += `${i} x ${j} = ${i * j}\n`;
    }
    pre.textContent += "\n"; // Tambahkan baris kosong setelah setiap tabel
  }
});
