
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
gamaMedia.push (new Gama ("1", "La Plata", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "Aerop.cordoba", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "mdq", "cChevrolet Cruze"));
gamaMedia.push (new Gama ("2", "aerop.eze", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "La Plata", "Nissan Sentra"));
gamaMedia.push (new Gama ("1", "Aerop.cordoba", "Nissan Sentra"));
gamaMedia.push (new Gama ("2", "mdq", "Nissan Sentra"));
gamaMedia.push (new Gama ("2", "aerop.eze", "Nissan Sentra"));
gamaMedia.push (new Gama ("1", "La Plata", "VW Golf"));
gamaMedia.push (new Gama ("2", "Aerop.cordoba", "VW Golf"));
gamaMedia.push (new Gama ("1", "mdq", "VW Golf"));
gamaMedia.push (new Gama ("1", "aerop.eze", "VW Golf"));
gamaMedia.push (new Gama ("0", "La Plata", "Ford Focus"));
gamaMedia.push (new Gama ("2", "Aerop.cordoba", "Ford Focus"));
gamaMedia.push (new Gama ("2", "mdq", "Ford Focus"));
gamaMedia.push (new Gama ("3", "aerop.eze", "Ford Focus"));

const gamaBaja= [];
gamaBaja.push (new Gama ("1", "La Plata", "Toyota Etios"));
gamaBaja.push (new Gama ("3", "Aerop.cordoba", "Toyota Etios"));
gamaBaja.push (new Gama ("2", "mdq", "eToyota Etios"));
gamaBaja.push (new Gama ("3", "aerop.eze", "Toyota Etios"));
gamaBaja.push (new Gama ("3", "La Plata", "Fiat Cronos"));
gamaBaja.push (new Gama ("4", "Aerop.cordoba", "Fiat Cronos"));
gamaBaja.push (new Gama ("2", "mdq", "Fiat Cronos"));
gamaBaja.push (new Gama ("3", "aerop.eze", "Fiat Cronos"));
gamaBaja.push (new Gama ("1", "La Plata", "Renault Kwid"));
gamaBaja.push (new Gama ("2", "Aerop.cordoba", "Renault Kwid"));
gamaBaja.push (new Gama ("1", "mdq", "Renault Kwid"));
gamaBaja.push (new Gama ("1", "aerop.eze", "Renault Kwid"));
gamaBaja.push (new Gama ("2", "La Plata", "Vw Gol trend"));
gamaBaja.push (new Gama ("4", "Aerop.cordoba", "Vw Gol trend"));
gamaBaja.push (new Gama ("3", "mdq", "Vw Gol trend"));
gamaBaja.push (new Gama ("4", "aerop.eze", "Vw Gol trend"));

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
