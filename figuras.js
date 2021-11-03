//Código del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lados) => lados * 4;
const areaCuadrado = (lados) => lados * lados;

console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//PI
const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => {
  return diametroCirculo(radio) * PI;
};

const areaCirculo = (radio) => radio * radio * PI;
console.groupEnd();
