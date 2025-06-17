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

addSection("Pengulangan Tahun", (pre) => {
  const tahun = 2023;
  for (let i = tahun; i >= 2000; i--) {
    pre.textContent += `Tahun: ${i}\n`;
  }
});
