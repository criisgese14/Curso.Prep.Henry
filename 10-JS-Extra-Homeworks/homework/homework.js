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
  arreglo = [];
  for (clave in objeto) {
    arreglo.push([clave, objeto[clave]]);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (var i = 0; i < string.length; i++) {
    if (!objeto[string[i]]) {
      objeto[string[i]] = 1;
    } else {
      objeto[string[i]] = objeto[string[i]] + 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = "";
  var minusculas = "";
  for (var i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()) {
      mayusculas = mayusculas + s[i];
    } else {
      minusculas = minusculas + s[i];
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newStr = ""; // creo una nueva variable vacia
  for (var i = 0; i < str.length; i++) { // recorro la string que me pasaron
    if (str[i] === " ") { // encuentro un espacio
      for (var j = i - 1; j >= 0; j--) { // recorro hacia atras
        newStr = newStr + str[j]; // le voy poniendo las letras al reves a la variable que creé
      }
      newStr = newStr + " "; // le añado un espacio
      str = str.slice(i + 1); // a mi string 
      i = 0; // igualo i a 0
    }
    if (i === str.length - 1) { // si i esta en la ultima posicion
      for (var y = i; y >= 0; y--) { 
        newStr = newStr + str[y]; 
      }
    }
  }
  return newStr;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  for (var i = 0; i < num.length; i++) {
    if (num[i] === num[num.length-1-i]) {
      return "Es capicua";
    } else {
      return "No es capicua"
    }
  }
  return num;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = "";
  for (var i = 0; i < cadena.length; i++) {
  if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
    nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux = "";
  for (var i = 0; i < arr.length-1; i++){
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
      aux = arr[i];
      arr[i] = arr[j];
      arr[j] = aux;
      }
    }
  }  
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var arreglo=[];
  var menor = [];
  var mayor = [];
  if (arreglo1.length < arreglo2.length) {
    menor = arreglo1;
    mayor = arreglo2;
  } else {
    menor = arreglo2;
    mayor = arreglo1;
  }
  for (var i = 0; i < menor.length; i++) {
    for (var j = 0; j < mayor.length; j++) {
      if (menor[i] === mayor[j]) {
        arreglo.push(menor[i]);
      }
    }
  }
  return arreglo;
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

