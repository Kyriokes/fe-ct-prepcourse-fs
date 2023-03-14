class Persona {
    constructor (nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar(){
        console.log("hola mi nombre es " + this.nombre + ". Tengo " +this.edad);
    }
}

class Programador extends Persona {
    constructor(nombre, edad, añosDeEsperiencia){
        super(nombre, edad);
        this.añosDeEsperiencia=añosDeEsperiencia;
    }
    codear(){
        console.log("Soy " + this.nombre + " codeo desde hace " + this.añosDeEsperiencia + " años")
    } 
}

var martin = new Persona ("Martin", 26);
var programador = new Programador ("Maria", 37, 4);
martin.saludar();
programador.codear();
programador.saludar();
