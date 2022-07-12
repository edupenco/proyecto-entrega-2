
let gamaAuto= prompt("seleccione que gama del vehiculo que  desea alquilar, Gama baja escriba A, gama media escriba B").toLowerCase();
function cotizadorAlquiler(){

let valorBaja=3450;
let valorMedia=4800;
if (gamaAuto == "a" || gamaAuto== "b"){
    let diasAlquiler = Number  (prompt("cuantos dias quiere alquilar el vehiculo:"));

        if (gamaAuto =="a"){
            
        let resultado=  (valorBaja * diasAlquiler);
        alert(`El valor del alquiler de un vehiculo gama baja por ${diasAlquiler} dias(s) es: ${resultado}$`);
        }
        else if(gamaAuto == "b"){
            let resultado=  (valorMedia * diasAlquiler);
            alert(`El valor del alquiler de un vehiculo gama media por ${diasAlquiler} dias(s) es: ${resultado}$`);;
        }
}
     else  {
            alert("Por favor vuelva a seleccionar una gama de vehiculos");
        }
}
cotizadorAlquiler();



class Gama {
    constructor (flota, ubicacion, modelo, alquilado){
        this.flota= parseFloat (flota);
        this.ubicacion= ubicacion.toLowerCase();
        this.modelo= modelo.toLowerCase();        
        this.alquilado= false;

    }
}
const gamaMedia= [];
gamaMedia.push (new Gama ("1", "La Plata", "cruze"));
gamaMedia.push (new Gama ("1", "Aerop.cordoba", "cruze"));
gamaMedia.push (new Gama ("1", "mdq", "cruze"));
gamaMedia.push (new Gama ("2", "aerop.eze", "cruze"));
gamaMedia.push (new Gama ("1", "La Plata", "sentra"));
gamaMedia.push (new Gama ("1", "Aerop.cordoba", "sentra"));
gamaMedia.push (new Gama ("2", "mdq", "sentra"));
gamaMedia.push (new Gama ("2", "aerop.eze", "sentra"));
gamaMedia.push (new Gama ("1", "La Plata", "golf"));
gamaMedia.push (new Gama ("2", "Aerop.cordoba", "golf"));
gamaMedia.push (new Gama ("1", "mdq", "golf"));
gamaMedia.push (new Gama ("1", "aerop.eze", "golf"));
gamaMedia.push (new Gama ("0", "La Plata", "focus"));
gamaMedia.push (new Gama ("2", "Aerop.cordoba", "focus"));
gamaMedia.push (new Gama ("2", "mdq", "focus"));
gamaMedia.push (new Gama ("3", "aerop.eze", "focus"));

const gamaBaja= [];
gamaBaja.push (new Gama ("1", "La Plata", "etios"));
gamaBaja.push (new Gama ("3", "Aerop.cordoba", "etios"));
gamaBaja.push (new Gama ("2", "mdq", "etios"));
gamaBaja.push (new Gama ("3", "aerop.eze", "etios"));
gamaBaja.push (new Gama ("3", "La Plata", "cronos"));
gamaBaja.push (new Gama ("4", "Aerop.cordoba", "cronos"));
gamaBaja.push (new Gama ("2", "mdq", "cronos"));
gamaBaja.push (new Gama ("3", "aerop.eze", "cronos"));
gamaBaja.push (new Gama ("1", "La Plata", "kwid"));
gamaBaja.push (new Gama ("2", "Aerop.cordoba", "kwid"));
gamaBaja.push (new Gama ("1", "mdq", "kwid"));
gamaBaja.push (new Gama ("1", "aerop.eze", "kwid"));
gamaBaja.push (new Gama ("2", "La Plata", "gol trend"));
gamaBaja.push (new Gama ("4", "Aerop.cordoba", "gol trend"));
gamaBaja.push (new Gama ("3", "mdq", "gol trend"));
gamaBaja.push (new Gama ("4", "aerop.eze", "gol trend"));

if (gamaAuto == "a"){
    const modelo = gamaBaja.map ((el) => el.modelo)
    const mod = [];
    modelo.forEach( (element) => {
        if ( !mod.includes (element)) {
            mod.push (element);
        }
    })


console.log(`Usted puede elgir entre estos modelos:  ${mod}`);
}

else if  (gamaAuto == "b"){
    const modelo = gamaMedia.map ((el) => el.modelo)
    const model = [];
    modelo.forEach( (elemento) => {
        if ( !model.includes (elemento)) {
            model.push (elemento);
        }
    })


console.log(`Usted puede elgir entre estos modelos:  ${model}`);
}
