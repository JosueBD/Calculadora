function agregar(valor) {
  document.getElementById("display").value += valor;
}

function limpiar() {
  document.getElementById("display").value = "";
}

function calcular() {
  try {
    let expresion = document.getElementById("display").value;
    let resultado = eval(expresion); // eval interpreta la operación
    document.getElementById("display").value = resultado;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
