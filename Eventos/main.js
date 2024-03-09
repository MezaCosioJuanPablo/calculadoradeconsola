function leernumeros() {
  const numerouno = document.getElementById("numero1").value;
  const numerodos = document.getElementById("numero2").value;
  console.log(numerouno);
  console.log(numerodos);
}

function sumar() {
  const numerouno = document.getElementById("numero1").value;
  const numerodos = document.getElementById("numero2").value;
  const resultado = parseInt(numerouno) + parseInt(numerodos);
  console.log(resultado);
  console.log(typeof resultado);
  document.getElementById("Resultado").innerHTML = resultado;
}

function restar() {
  const numerouno = document.getElementById("numero1").value;
  const numerodos = document.getElementById("numero2").value;
  const resultado = parseInt(numerouno) - parseInt(numerodos);
  console.log(resultado);
  console.log(typeof resultado);
  document.getElementById("Resultado").innerHTML = resultado;
}

function multiplicar() {
  const numerouno = document.getElementById("numero1").value;
  const numerodos = document.getElementById("numero2").value;
  const resultado = parseInt(numerouno) * parseInt(numerodos);
  console.log(resultado);
  console.log(typeof resultado);
  document.getElementById("Resultado").innerHTML = resultado;
}

function dividir() {
  const numerouno = document.getElementById("numero1").value;
  const numerodos = document.getElementById("numero2").value;
  const resultado = parseInt(numerouno) / parseInt(numerodos);
  console.log(resultado);
  console.log(typeof resultado);
  document.getElementById("Resultado").innerHTML = resultado;
}
