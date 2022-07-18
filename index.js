

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
        this.ubicacion= ubicacion;
        this.modelo= modelo.toLowerCase();        
        this.alquilado= false;

    }
}
const gamaMedia= [];
gamaMedia.push (new Gama ("1", "La Plata", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "Aeropuerto de Cordoba ", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "Mar del Plata", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("2", "Aeropuerto de Ezeiza", "Chevrolet Cruze"));
gamaMedia.push (new Gama ("1", "La Plata", "Nissan Sentra"));
gamaMedia.push (new Gama ("1", "Aeropuerto de Cordoba", "Nissan Sentra"));
gamaMedia.push (new Gama ("2", "Mar del Plata", "Nissan Sentra"));
gamaMedia.push (new Gama ("2", "Aeropuerto de Ezeiza", "Nissan Sentra"));
gamaMedia.push (new Gama ("1", "La Plata", "VW Golf"));
gamaMedia.push (new Gama ("2", "Aeropuerto de Cordoba ", "VW Golf"));
gamaMedia.push (new Gama ("1", "Mar del Plata", "VW Golf"));
gamaMedia.push (new Gama ("1", "Aeropuerto de Ezeiza", "VW Golf"));
gamaMedia.push (new Gama ("0", "La Plata", "Ford Focus"));
gamaMedia.push (new Gama ("2", "Aeropuerto de Cordoba ", "Ford Focus"));
gamaMedia.push (new Gama ("2", "Mar del Plata", "Ford Focus"));
gamaMedia.push (new Gama ("3", "Aeropuerto de Ezeiza", "Ford Focus"));

const gamaBaja= [];
gamaBaja.push (new Gama ("1", "La Plata", "Toyota Etios"));
gamaBaja.push (new Gama ("3", "Aeropuerto de Cordoba ", "Toyota Etios"));
gamaBaja.push (new Gama ("2", "Mar del Plata", "Toyota Etios"));
gamaBaja.push (new Gama ("3", "Aeropuerto de Ezeiza", "Toyota Etios"));
gamaBaja.push (new Gama ("3", "La Plata", "Fiat Cronos"));
gamaBaja.push (new Gama ("4", "Aeropuerto de Cordoba ", "Fiat Cronos"));
gamaBaja.push (new Gama ("2", "Mar del Plata", "Fiat Cronos"));
gamaBaja.push (new Gama ("3", "Aeropuerto de Ezeiza", "Fiat Cronos"));
gamaBaja.push (new Gama ("1", "La Plata", "Renault Kwid"));
gamaBaja.push (new Gama ("2", "Aeropuerto de Cordoba", "Renault Kwid"));
gamaBaja.push (new Gama ("1", "Mar del Plata", "Renault Kwid"));
gamaBaja.push (new Gama ("1", "Aeropuerto de Ezeiza", "Renault Kwid"));
gamaBaja.push (new Gama ("2", "La Plata", "Vw Gol trend"));
gamaBaja.push (new Gama ("4", "Aeropuerto de Cordoba", "Vw Gol trend"));
gamaBaja.push (new Gama ("3", "Mar del Plata", "Vw Gol trend"));
gamaBaja.push (new Gama ("4", "Aeropuerto de Ezeiza", "Vw Gol trend"))
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

const lugar=document.getElementById("lugar")
const gamaBajaUbicacion= sacarRepetidos(gamaBaja)
gamaBajaUbicacion.map(elemento =>{
   // console.log(elemento)  

    lugar.innerHTML +=`<option>${elemento}</option>`;

})
function sacarRepetidos(array){
    const ubicacion = array.map ((el) => el.ubicacion)
    const ubi = [];
    ubicacion.forEach( (element) => {
        if ( !ubi.includes (element)) {
            ubi.push (element);
        }
    })
    return ubi
}




let boton= document.getElementById("btn")
console.log (boton)
boton.addEventListener("click",(e) =>{
    e.preventDefault()  
  
    alert("Estamos buscando las mejores opciones de alquiler")
})
  
let fecha= document.getElementById("fechaInicio")
fecha.value
    