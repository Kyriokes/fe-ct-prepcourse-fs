/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let i=0;i<array.length;i++){
      array[i] = array[i] +1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;   
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras[0];
   for (let i=1;i<palabras.length;i++){
      frase = frase +" "+palabras[i];
   }
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for ( let i=0 ; i < array.length ; i++ ){
      if ( array[i] === elemento ){
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado =0;
   for ( let i= 0 ; i < arrayOfNums.length ; i++){
      resultado = resultado + arrayOfNums[i];
   }
   return resultado;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultado =0;
   var j = 0
   for ( let i= 0 ; i < resultadosTest.length ; i++){
      resultado = resultado + resultadosTest[i];
      j++;
   }
   resultado = resultado/j;
   return resultado;   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var resultado =arrayOfNums[0];
   for ( let i= 1 ; i < arrayOfNums.length ; i++){
      if(arrayOfNums[i]>resultado){
         resultado=arrayOfNums[i];
      }
   }
   return resultado; 
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0){
      return 0;
   }
   resultado = arguments[0];
   for ( let i = 1 ; i < arguments.length ; i++){
      resultado = resultado * arguments[i];
   }
   return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var i = 0
   var cantidad = 0
   do {
      if(array[i]>18){
         cantidad=cantidad+1;
      }
      i=i+1;
   } while (i<array.length);
   return cantidad;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia>1&&numeroDeDia<7){
      return "Es dia laboral";
   }
   return "Es fin de semana";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var nueve = String(num);
   if(nueve[0] === '9'){
      return true;
   }
   return false;

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var elementoUno = array[0];
   var j = array.length;
   for (let i=0; j>i ; i++){
      if(elementoUno!=array[i]){
         return false;
      }
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var eNmAnO = array.includes("Enero","Marzo","Noviembre");
   var eNmAnO2 = [];
   if (eNmAnO!=true){
      return "No se encontraron los meses pedidos";
   }
   for (let i = 0 ; i < array.length ; i++){
      if(array[i]==="Enero"){
         eNmAnO2.push(array[i]);
      }
      if(array[i]==="Marzo"){
         eNmAnO2.push(array[i]);
      }
      if(array[i]==="Noviembre"){
         eNmAnO2.push(array[i]);
      }
   }
   return eNmAnO2;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for (let i = 0 ; i < 11 ; i++){
      tabla.push(i*6);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var tabla = [];
   for (let i = 0 ; i < array.length ; i++){
      if(array[i] > 100){
         tabla.push(array[i]);
      }
   }
   return tabla;   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var numero = num;
   var array = [];
   var i =0;
   var vf = 0;
   for (let i=0;i<10;i++){
      if(i===numero){
         return "Se interrumpió la ejecución";
      }
   array[i] = numero +=2;
   }
   return array;
   /*do{
      numero = numero +2;
      array[i] = numero;
      if(numero===i){
         vf = vf+1;
         break;
      }
      i++;   
   }while(i<10);
   if(vf){
      return "Se interrumpió la ejecución";
   }
   return array;*/
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   for (let i=0; i<10 ; i++){
      if (i === 5){
         continue;
      }
      array.push(num += 2);
   }
   return array;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
