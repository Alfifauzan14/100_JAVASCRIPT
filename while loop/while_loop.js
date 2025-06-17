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
addSection("While Loop 1 sampai 5", (pre) => {
  let i = 1;
  while (i <= 5) {
    pre.textContent += `While ke-${i}\n`;
    i++;
  }
});
