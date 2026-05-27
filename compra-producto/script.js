const formularioCompra = document.getElementById("formularioCompra");
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const mensaje = document.getElementById("mensaje");
// Objeto con productos y precios.
const productos = {
    teclado: 12000,
    mouse: 7000,
    pendrive: 5000
};
// Cuando cambia el producto seleccionado, actualizamos el precio.
producto.addEventListener("change", () => {
    const productoSeleccionado = producto.value;
    if (productoSeleccionado === "") {
        precio.value = "";
        return;
    }
    precio.value = productos[productoSeleccionado];
});
// Función clásica para calcular el total.
function calcularTotal(precioUnitario, cantidadProducto) {
    return precioUnitario * cantidadProducto;
}
// Función de flecha para dar formato al dinero.
const formatearPrecio = (valor) => {

    return `$${valor.toLocaleString("es-CL")}`;
};
formularioCompra.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombreProducto = producto.value;
    const precioUnitario = Number(precio.value);
    const cantidadProducto = Number(cantidad.value);
    if (nombreProducto === "" || cantidad.value === "") {
        mensaje.innerHTML = "Debe seleccionar un producto e ingresar una cantidad.";
        return;
    }
    if (cantidadProducto <= 0) {
        mensaje.innerHTML = "La cantidad debe ser mayor a cero.";
        return;
    }
    const total = calcularTotal(precioUnitario, cantidadProducto);
    mensaje.innerHTML = `
<strong>Resumen de compra</strong><br>
Producto: ${nombreProducto}<br>
Precio unitario: ${formatearPrecio(precioUnitario)}<br>
Cantidad: ${cantidadProducto}<br>
Total a pagar: ${formatearPrecio(total)}
`;
});