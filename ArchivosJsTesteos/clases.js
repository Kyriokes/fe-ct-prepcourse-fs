class Footabll {
    constructor(jugador) {
        this.jugador = jugador;
        }

    obtenerNombre() {
        console.log(this.jugador);
    }
}

var argentina = new Footabll("Messi");
var brasil = new Footabll("Neymar");

argentina.obtenerNombre();
brasil.obtenerNombre();