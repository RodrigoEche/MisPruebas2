// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  obj = {
    nombre:     nombre,
    edad:       edad,
    meow:       function () {return 'Meow!'} // OJO entendi que devolver string era usar console.log() nada que ver!!!
  };

  return obj; //devuelve el objeto creado dentro de la función
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;   // OJO el null no lleva comillas de ningún tipo!!!!!!!!!! ni mayuscula!!!!!
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();   // raaaaro!!!! ...
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso["numeroMisterioso"]*5;
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  objeto = {
    'nombre':     nombre,
    'email':      email,
    'password':  password
  };
  return objeto;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:   
  // OJOOOO: dos situaciones que deben considerarse:
  // 1. el objeto usuario pasado puede no tener  la propiedad email y estar entonces inndefinida
  // 2. puede estar definida la propiedad pero no tener un valor asignado
  // 3. puede tambien chequearse si contiene arroba
  // 4. puede enviarse un email y comprobarse si esta activo etc. 3 y 4 serian nuevas funciones nada que ver con esta.

  if ( usuario.email != undefined && usuario['email'] !=   null ) return true; else return false;
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual 
  // al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  // OJO PONER undefined sin comillas con comillas no anda en este ejemplo pero si en el anterior tieneEmail()
  if ( objeto[ propiedad ] !== undefined  ) return true; else return false;

}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( usuario.password == password ) return true; else return false;
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  //for ( i = 0; i < usuarios.length; i++ ) usuarios[i].esPremium = true; //ANDUVO
  for ( i = 0; i < usuarios.length; i++ ) usuarios[i][esPremium] = true; 
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  suma = 0

  for ( i = 0; i < usuario.posts.length; i++ ) {
    a = usuario.posts[i].likes;
    suma = suma + a;
  }

  return suma;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método llamado "calcularPrecioDescuento" al objeto "producto" 
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") 
  // y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function () {
    precio = this.precio;
    descuento = this.porcentajeDeDescuento;
    nuevoPrecio = precio - precio * descuento;    
    return nuevoPrecio;
  }; 
  
  return producto;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}