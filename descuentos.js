function porcentajesYdescuentos(precio, descuento) {
  const DescuentoAplicarPrecio = 100 - descuento;
  const precioConDescuento = (precio * DescuentoAplicarPrecio) / 100;
  return precioConDescuento;
}

const cupon = ["regular", "confiable", "preferencial"];

console.log(cupon);
function btn_PriceDiscount() {
  const inputPrice = document.getElementById("input_Price");
  const priceValue = Number(inputPrice.value);
  const inputcuponDiscount = document.getElementById("input_CuponDiscount");
  const cuponDiscountValue = inputcuponDiscount.value;

  let descuento = 0;
  if (!cupon.includes(cuponDiscountValue)) {
    alert("El cupón " + cuponDiscountValue + " no existe!!");
  } else {
    switch (cuponDiscountValue) {
      case cupon[0]:
        descuento = 10;
        break;
      case cupon[1]:
        descuento = 30;
        break;
      case cupon[2]:
        descuento = 50;
        break;
    }
  }

  const priceFinal = porcentajesYdescuentos(priceValue, descuento);
  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio a pagar el $" + priceFinal;
}
