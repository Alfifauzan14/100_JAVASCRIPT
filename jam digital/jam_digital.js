setInterval(() => {
  const now = new Date();
  document.getElementById("jam").innerText = now.toLocaleTimeString();
}, 1000);
