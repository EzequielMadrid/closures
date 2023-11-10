/* 

IIFE === Expresión de función ejecutada inmediatamente
         Otro tipo de sintáxis para usar closures 🔥
         
.En este ejemplo se llega al mismo resultado que
en el archivo 'app.js'

.Más info: https://developer.mozilla.org/es/docs/Glossary/IIFE

*/

(function () {
  function iniciarJuego() {
    let dinero = 300;
    let inventario = [];

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

    return { comprar, mostrarEstado };
  }

  alert("ENTRASTE AL INVENTARIO 👽");

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
})();
