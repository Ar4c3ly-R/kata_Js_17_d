
//Creación y asignacion de valor de una variable
var nombre;
nombre = 'Aracely';

var nombreUsuario = 'Carlos';

//STRINGS

var pais = 'colombia';
var letra = 'a';
var nombreInicial = '';

var info = nombre + pais;

console.log(info);

// Las variables se pueden reasignar sin que
pais = 'mexico';
letra = 'x';

//Podemos acceder a la información que está en la variable
console.log('Hola');
console.log(pais);

//number
var edad = '';

edad = 20;

var telefono = 109898676;
var costo = 50;
var resultado = -100;
var promedio = 9;

//Los valores se pueden reasignar
costo = 100;
resultado = 34;

//los números tambien pueden ser strings
var numCelular = '+9864543654';
var numOficina = '98757121';

//Concatenar Unir dos o mas Strings
var info = nombre + pais;

console.log(info);
console.log(nombreUsuario + ' ' + letra + ' ');
console.log('mi nombre es : ' + nombreUsuario + ' y Mi promedio es : ' + promedio);

//recordar que al concatenar un string con un numero se convierte en string

//Template string, otra forma de concatenar

//BOOLEAN
var esAdulto = true;
var completado = false;
var graduado = false;
var cumple = true;
var Mexicano = false;

//La reasignacion de valores no diferencia los tipos de datos
esAdulto = 100;
nombre = true;