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

//Interactuando con HTML

//Código del Cuadrado

//Calculando el Perímetro del cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputLadosCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

//Calculando el Área del cuadrado
function calcularAreaCuadrado() {
  const input = document.getElementById("InputLadosCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Código del Triángulo

//Calculando el perimetro del triangulo
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("input_ladoTriangulo1");
  const lado2 = document.getElementById("input_ladoTriangulo2");
  const base = document.getElementById("input_baseTriangulo");

  const valueLado1 = Number(lado1.value);
  const valueLado2 = Number(lado2.value);
  const valueBase = Number(base.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

//Calculando el Area del triangulo
function calcularAreaTriangulo() {
  const base = document.getElementById("input_baseTriangulo");
  const altura = document.getElementById("input_alturaTriangulo");

  const valueBase = Number(base.value);
  const valueAltura = Number(altura.value);

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

//Código del Círculo

//Calculando el Area del Circulo

function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("InputRadioCirculo");
  const valueRadio = Number(inputRadio.value);
  const diametro = diametroCirculo(valueRadio);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputRadioCirculo");
  const valueRadio = Number(inputRadio.value);
  const perimetro = perimetroCirculo(valueRadio);

  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputRadioCirculo");
  const valueRadio = Number(inputRadio.value);
  const area = areaCirculo(valueRadio);
  alert(area);
}
