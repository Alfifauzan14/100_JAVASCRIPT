function konversiKM() {
    let km = parseFloat(document.getElementById("km").value);
    let meter = km * 1000;
    document.getElementById("hasil").innerText = `${km} km = ${meter} m`;
}
