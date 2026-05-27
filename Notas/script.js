// Capturamos los elementos del HTML
const formulario = document.getElementById("formularioNotas");
const notaUno = document.getElementById("notaUno");
const notaDos = document.getElementById("notaDos");
const notaTres = document.getElementById("notaTres");
const resultado = document.getElementById("resultado");

// Función de flecha para calcular el promedio de 3 números
const calcularPromedio = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// Escuchamos el evento submit del formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evitamos que la página se recargue

  // Convertimos los textos ingresados en números decimales (Float)
  const n1 = parseFloat(notaUno.value);
  const n2 = parseFloat(notaDos.value);
  const n3 = parseFloat(notaTres.value);

  // Calculamos el promedio y lo fijamos a 1 solo decimal
  const promedioFinal = calcularPromedio(n1, n2, n3).toFixed(1);

  // Hacemos visible el cuadro de resultados
  resultado.style.display = "block";

  // Limpiamos clases de ejecuciones anteriores para que no se mezclen los colores
  resultado.classList.remove("aprobado", "reprobado");

  // Lógica para determinar la situación del alumno
  let mensajeCondicion = "";
  
  if (promedioFinal >= 4.0) {
    mensajeCondicion = "<strong>¡Aprobado!</strong> 🎉";
    resultado.classList.add("aprobado");
  } else {
    mensajeCondicion = "<strong>Reprobado</strong> ❌";
    resultado.classList.add("reprobado");
  }

  // Inyectamos el resultado en el contenedor HTML
  resultado.innerHTML = `
    Promedio Final: <strong>${promedioFinal}</strong><br>
    Estado: ${mensajeCondicion}
  `;
});