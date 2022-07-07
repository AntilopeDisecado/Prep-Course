// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArray = []
    for (let key in objeto) { 
    let value;
    value = objeto[key];
    let array = [key, value];
    newArray.push(array)
} 
    return newArray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let array = s.split("");
  let upper = []
  let lower = []
  for (var i = 0; i < array.length; i++) {
  if (array[i] === array[i].toUpperCase()) {
  upper.push(array[i])
  } else {
  lower.push(array[i])
  }
  }
  return upper.join('') + lower.join('')
  }



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var reverseStr = [];
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
var letters = words[i].split('')
var reverseWord = []
for (var j = 0; j < letters.length; j++) {
reverseWord.unshift(letters[j])
}
var rev = reverseWord.join('')
reverseStr.push(rev)
}
return reverseStr.join(' ')
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    var array = (numero.toString().split(''));
    let j = array.length - 1;
    for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[j]) {
    return 'No es capicua';
    } else {
    j--;
    }
    return 'Es capicua';
    }
  }



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    let array = cadena.split('');
    for (let i = 0; i < array.length; i++) {
    if (array[i] === 'a' || array[i] === 'b' || array[i] === 'c') {
    array[i] = null;
    }
    }
    return array.join('');
    }



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var currentLength = 1;
  var maxLength = 0;
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
  if (maxLength < arr[i].length) {
  maxLength = arr[i].length
  }
  }
  while (currentLength <= maxLength) {
  for (var j = 0; j < arr.length; j++) {
  if (arr[j].length === currentLength) {
  newArray.push(arr[j])
  }
  }
  ++currentLength
  }
  return newArray
  }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var i = 0;
var union = []
while (i <= arreglo1.length) {
for (var j = 0; j < arreglo2.length; j++) {
if (arreglo1[i] === arreglo2[j]) {
union.push(arreglo1[i]);
} 
}
i++
}
return union
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

