function porcentajesYdescuentos(precio, descuento) {
  const DescuentoAplicarPrecio = 100 - descuento;
  const precioConDescuento = (precio * DescuentoAplicarPrecio) / 100;
  return precioConDescuento;
}

function btn_PriceDiscount() {
  const inputPrice = document.getElementById("input_Price");
  const priceValue = Number(inputPrice.value);
  const inputDiscount = document.getElementById("input_Discount");
  const DiscountValue = Number(inputDiscount.value);

  const priceFinal = porcentajesYdescuentos(priceValue, DiscountValue);
  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio a pagar el $" + priceFinal;
}
