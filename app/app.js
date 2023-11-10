/*

.Se habla de 'cierres' en programación 
cuando definimos una función DENTRO de otra función, 
la función interna (llamada función hija) tiene acceso a las variables de la función externa 
(llamada función padre). Esto crea un cierre o closure.

.Imaginar ser dueños de un cofre del tesoro,
solamente se podría manipular lo que hay dentro sí:
  (1) lo cambiamos nosotros
  (2) le damos a alguien la llave
Esa llave sería la función...
Sí el cofre se manipula, el mundo sigue girando.

.Blóques de códigos especiales usados para
mantener un orden en nuestras APPs y usarlos 
cuando los necesitemos sin romper el resto del 
código.

**************************/

function iniciarJuego() {
  let dinero = 300; // Dinero inicial del personaje
  let inventario = []; // Inventario inicial vacío

  function comprar(item, costo) {
    if (dinero >= costo) {
      dinero -= costo;
      inventario.push(item);
      console.log(
        `Compra exitosa. Saldo restante: ${dinero}. Inventario: ${inventario.join(
          ", "
        )}`
      );
    } else {
      console.log(`Fondos insuficientes. Saldo actual: ${dinero}.`);
    }
  }

  function mostrarEstado() {
    console.log(
      `Saldo actual: ${dinero}. Inventario: ${inventario.join(", ")}`
    );
  }

  /*   forma antigua de retornar...
  return {
    comprar: comprar,
    mostrarEstado: mostrarEstado,
  }; */
  return { comprar, mostrarEstado }; // forma actualizada de retornar => actualización a partir de ECMA 6
}

alert("ENTRASTE AL INVENTARIO 👽");

// sino declaro iniciarJuego() NO funciona nada de lo que hay DENTRO
let jugador = iniciarJuego();

jugador.comprar(
  "Espada",
  prompt("Espada $80 \n Se abona tipeando precio ( 80 )")
);
jugador.mostrarEstado();

jugador.comprar(
  "Escudo",
  prompt("Escudo $80 \n Se abona tipeando precio ( 45 )")
);
jugador.mostrarEstado();

jugador.comprar(
  "Pocima",
  prompt("Pocima $200 \n Se abona tipeando precio ( 200 )")
);
jugador.mostrarEstado();
