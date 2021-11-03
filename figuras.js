//Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado son ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  `Los lados del Triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);

console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es ${areaTriangulo}cm^2`);

console.groupEnd();

//Código del Círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo}cm`);

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es ${diametroCirculo}cm`);

//PI
const PI = Math.PI;
console.log(`Valor del PI es ${PI}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es ${perimetroCirculo}cm`);

//Área del circulo
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log(`El perímetro del círculo es ${areaCirculo}cm^2`);

console.groupEnd();
