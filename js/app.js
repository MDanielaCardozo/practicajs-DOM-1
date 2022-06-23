/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/
let numeroAleatorio = 0;

function generarNumeroAleatorio(){
  console.log('desde la funcion generarNumeroAleatorio');
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);
}

function consultarNumero(){
  console.log('desde la funcion consultarNumero');
  //buscar el valor del input
  let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value); //solo guardo el valor no el objeto entero
  console.log(numeroIngresado);
  console.log(numeroAleatorio);
  if(numeroIngresado === numeroAleatorio){
    console.log('Ganaste!')
  }  else if ( numeroIngresado > numeroAleatorio ){
    console.log('El numero magico es menor al ingresado');
  } else {
    console.log('El numero magico es mayor al ingresado');
  }
}