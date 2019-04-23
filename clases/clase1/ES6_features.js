// Default parameters

function sum(a=1, b=20){
	return a + b
}

console.log(sum())

// Template literals
var name = 'Ana';
var greeting = `Hello ${name}! Welcome back!`;

console.log(greeting)

// Arrow functions
const sumarUno = numero => numero + 1;

console.log(sumarUno(5))



// Funciones de orden superior

const unArray = ['pera', 'manzana', 'naranja', 'uva'];

// con FOR
let nuevoArrayConFor = [];

for (let i = 0; i < unArray.length; i++){
	nuevoArrayConFor.push({fruta: unArray[i], index: i})
}

console.log(nuevoArrayConFor)

// Con MAP
const nuevoArrayConMap = unArray.map((fruta, index) => ({fruta, index})) // mejor object literal

console.log(nuevoArrayConMap)


// Destructuring
var randomData = {a: 12, b: false, c: 'blue'};
var {a, c} = randomData;



// Spread operator
function f(x, y, z) { 
	console.log(x, y, z)
}
var args = [0, 1, 2];
f(...args);

var partes = ['hombros', 'torso'];
var cuerpo = ['cabeza', ...partes, 'piernas', 'y', 'pies'];

console.log(cuerpo)


// Rest operator
function myFun(a, b, ...manyMoreArgs) {
	console.log('a', a)
	console.log('b', b)
	console.log('manyMoreArgs', manyMoreArgs); // Rest
  console.log('arguments', arguments)
}

myFun('uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho');


class Persona {
	constructor(nombre, altura){
		this.nombre = nombre;
		this.altura = altura
	}

	caminar(pasos){
		console.log(this.nombre + ' camina')
		for(let i = 1; i <= pasos; i++){
			console.log('paso')
		}
	}
}

var Pepe = new Persona('Pepe', 160);

Pepe.caminar(10)

// Closure

const calcularIva = function(){
	const iva = 21;
	return function(valor){
		return valor * iva / 100
	}
}

const miIva = calcularIva();

console.log('iva', miIva(20))