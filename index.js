function cotizadorAlquiler(){
let gamaAuto= prompt("seleccione que gama del vehiculo que  desea alquilar, Gama baja escriba A, gama media escriba B").toLowerCase();
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