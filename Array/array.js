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

addSection("Array", (pre) => {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  pre.textContent = `Fruits: ${fruits.join(", ")}`;
});
