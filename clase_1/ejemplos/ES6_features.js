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

const miFuncion = function(numero){
	return numero + 1
}

console.log(sumarUno(5))



// Funciones de orden superior

const unArray = ['pera', 'manzana', 'naranja', 'uva'];

// con FOR
let nuevoArrayConFor = [];

for (let i = 0; i < unArray.length; i++){
	nuevoArrayConFor.push({fruta: unArray[i], index: i})
}

console.log(nuevoArrayConFor)

const transformarEnObj = (fruta, index) => {
	return {fruta, index}
}

function transformarEnObj (fruta, index){
	return {
		fruta,
		index
	}
}
// Con MAP
const nuevoArrayConMap = unArray.map(transformarEnObj) // mejor object literal

console.log(nuevoArrayConMap)


// Destructuring
var randomData = {a: 12, b: false, c: 'blue'};
var {a, c} = randomData;

var a = randomData.a
var c = randomData.c


// Spread operator
function f(x, y, z) { 
	console.log(x, y, z)
}

var args = [0, 1, 2];
f (args[0], args[1], args[2])
f(...args);

var partes = ['hombros', 'torso'];
var cuerpo = ['cabeza', ...partes, 'piernas', 'y', 'pies'];

console.log(cuerpo)

var concatenado = [...partes, cuerpo]
var obj1 = {
	prop: 'pepe'
}

var obj2 = {
	prop: 'otra cosa'
}

var objMergeado = {...obj1, obj2}


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




if (q = 0){
	b = 2
}

b = q === 0? 2 : 'nada'

b = q === 0 && 2