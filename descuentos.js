function porcentajesYdescuentos(precio, descuento) {
  const DescuentoAplicarPrecio = 100 - descuento;
  const precioConDescuento = (precio * DescuentoAplicarPrecio) / 100;
  return precioConDescuento;
}
