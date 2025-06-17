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
addSection("For Loop 1 sampai 10", (pre) => {
  for (let i = 1; i <= 10; i++) {
    pre.textContent += `Perulangan ke-${i}\n`;
  }
});
