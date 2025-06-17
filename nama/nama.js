function test(number1, number2, angka) {
    console.log((number1 * number2) / angka);
}

function helo() {
  const nama = document.getElementById("nama")
  const texthello = document.getElementById("text-hello")
  console.log("Hello  "+nama.value)
  texthello.innerHTML = "Hello "+nama.value
}
test(1,2,4)
test(5,4,3)