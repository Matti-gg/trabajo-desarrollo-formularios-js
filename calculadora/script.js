// Capturamos elementos del HTML usando su id.
const formulario = document.getElementById("formularioCalculadora");
const numeroUno = document.getElementById("numeroUno");
const numeroDos = document.getElementById("numeroDos");
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

// Función clásica: usa la palabra reservada function.
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// Función de flecha asignada a una constante.
const multiplicar = (a, b) => {
  return a * b;
};

// Función de flecha más corta.
const dividir = (a, b) => a / b;

// Esta función decide qué operación realizar.
const calcular = (a, b, tipoOperacion) => {
  if (tipoOperacion === "suma") {
    return sumar(a, b);
  }
  if (tipoOperacion === "resta") {
    return restar(a, b);
  }
  if (tipoOperacion === "multiplicacion") {
    return multiplicar(a, b);
  }
  if (tipoOperacion === "division") {
    if (b === 0) {
      return "No se puede dividir por cero";
    }
    return dividir(a, b);
  }
  return "Debe seleccionar una operación";
};

// Escuchamos el evento submit del formulario.
formulario.addEventListener("submit", function (evento) {
  // Evita que el formulario recargue la página.
  evento.preventDefault();

  // Los datos que vienen desde el formulario llegan como texto.
  // Por eso usamos Number() para convertirlos a número.
  const valorUno = Number(numeroUno.value);
  const valorDos = Number(numeroDos.value);
  const tipoOperacion = operacion.value;

  // Muestra el contenedor de resultados (por si estaba oculto en el CSS)
  resultado.style.display = "block";

  // Validación básica.
  if (numeroUno.value === "" || numeroDos.value === "" || tipoOperacion === "") {
    resultado.innerHTML = "Debe completar todos los campos.";
    return;
  }

  const respuesta = calcular(valorUno, valorDos, tipoOperacion);

  // Mostramos el resultado en el HTML.
  // Corrección: Se arregló la etiqueta </small> que estaba cortada en una nueva línea.
  resultado.innerHTML = `
    <strong>Resultado:</strong> ${respuesta}<br>
    <small>Tipo de dato del primer número: ${typeof numeroUno.value}</small><br>
    <small>Después de usar Number(): ${typeof valorUno}</small>
  `;
});