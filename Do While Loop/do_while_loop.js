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

addSection("3. Do...While Loop", (pre) => {
  let i = 1;
  do {
    pre.textContent += `Do While ke-${i}\n`;
    i++;
  } while (i <= 5);
});
