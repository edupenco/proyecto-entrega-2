let boton = document.getElementById("btn");
let botonGamaBaja = document.getElementById("botonGamaBaja")
let botonGamaMedia = document.getElementById("botonGamaMedia")
let gamaAuto
let autos = document.getElementById("autos")
localStorage.setItem("gamaAuto", gamaAuto)

let valorBaja = 3450;
let valorMedia = 4800;

// if (localStorage.getItem("gamaAuto") == "a" || localStorage.getItem("gamaAuto")== "b"){
if (false) {
    //esto puede ir afuera del if
    let diasAlquiler;


    if (botonPresupuesto) {
        // diasAlquiler = Number  (prompt("cuantos dias quiere alquilar el vehiculo:"));
        localStorage.setItem("diasAlquiler", diff)
    }

    if (localStorage.getItem("gamaAuto") == "a") {

        let resultado = (valorBaja * localStorage.getItem("diff"));
        Swal.fire(
            `El valor del alquiler de un vehiculo gama baja por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$ `,
            'Haga click para continuar!',
            'success'
        )

        // alert(`El valor del alquiler de un vehiculo gama baja por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$ `);

    }
    else if (localStorage.getItem("gamaAuto") == "b") {
        let resultado = (valorMedia * localStorage.getItem("diff"));
        Swal.fire(
            `El valor del alquiler de un vehiculo gama media por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$!`,
            'Haga click para continuar!',
            'success'
        )
        // alert(`El valor del alquiler de un vehiculo gama media por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$`);;

    }
}
//  else  {
//         alert("Por favor vuelva a seleccionar una gama de vehiculos");
//     }
class Gama {
    constructor(flota, ubicacion, modelo, alquilado) {
        this.flota = parseFloat(flota);
        this.ubicacion = ubicacion;
        this.modelo = modelo;
        this.alquilado = false;

    }
}
const gamaMedia = [];
gamaMedia.push(new Gama("1", "La Plata", "Chevrolet Cruze"));
gamaMedia.push(new Gama("1", "Aeropuerto de Cordoba ", "Chevrolet Cruze"));
gamaMedia.push(new Gama("1", "Mar del Plata", "Chevrolet Cruze"));
gamaMedia.push(new Gama("2", "Aeropuerto de Ezeiza", "Chevrolet Cruze"));
gamaMedia.push(new Gama("1", "La Plata", "Nissan Sentra"));
gamaMedia.push(new Gama("1", "Aeropuerto de Cordoba", "Nissan Sentra"));
gamaMedia.push(new Gama("2", "Mar del Plata", "Nissan Sentra"));
gamaMedia.push(new Gama("2", "Aeropuerto de Ezeiza", "Nissan Sentra"));
gamaMedia.push(new Gama("1", "La Plata", "Volkswagen Golf"));
gamaMedia.push(new Gama("2", "Aeropuerto de Cordoba ", "Volkswagen Golf"));
gamaMedia.push(new Gama("1", "Mar del Plata", "Volkswagen Golf"));
gamaMedia.push(new Gama("1", "Aeropuerto de Ezeiza", "Volkswagen Golf"));
gamaMedia.push(new Gama("0", "La Plata", "Ford Focus"));
gamaMedia.push(new Gama("2", "Aeropuerto de Cordoba ", "Ford Focus"));
gamaMedia.push(new Gama("2", "Mar del Plata", "Ford Focus"));
gamaMedia.push(new Gama("3", "Aeropuerto de Ezeiza", "Ford Focus"));

const gamaBaja = [];
gamaBaja.push(new Gama("1", "La Plata", "Toyota Etios"));
gamaBaja.push(new Gama("3", "Aeropuerto de Cordoba ", "Toyota Etios"));
gamaBaja.push(new Gama("2", "Mar del Plata", "Toyota Etios"));
gamaBaja.push(new Gama("3", "Aeropuerto de Ezeiza", "Toyota Etios"));
gamaBaja.push(new Gama("3", "La Plata", "Fiat Cronos"));
gamaBaja.push(new Gama("4", "Aeropuerto de Cordoba ", "Fiat Cronos"));
gamaBaja.push(new Gama("2", "Mar del Plata", "Fiat Cronos"));
gamaBaja.push(new Gama("3", "Aeropuerto de Ezeiza", "Fiat Cronos"));
gamaBaja.push(new Gama("1", "La Plata", "Renault Kwid"));
gamaBaja.push(new Gama("2", "Aeropuerto de Cordoba", "Renault Kwid"));
gamaBaja.push(new Gama("1", "Mar del Plata", "Renault Kwid"));
gamaBaja.push(new Gama("1", "Aeropuerto de Ezeiza", "Renault Kwid"));
gamaBaja.push(new Gama("2", "La Plata", "Volkswagen Gol trend"));
gamaBaja.push(new Gama("4", "Aeropuerto de Cordoba", "Volkswagen Gol trend"));
gamaBaja.push(new Gama("3", "Mar del Plata", "Volkswagen Gol trend"));
gamaBaja.push(new Gama("4", "Aeropuerto de Ezeiza", "VolkswagenVw Gol trend"))
if (localStorage.getItem(gamaAuto) == "a") {
    const modelo = gamaBaja.map((el) => el.modelo)
    const mod = [];
    modelo.forEach((element) => {
        if (!mod.includes(element)) {
            mod.push(element);
        }
    })

    localStorage.setItem("modelos", mod)
    console.log(`Usted puede elgir entre estos modelos:  ${mod}`);
}

else if (gamaAuto == "b") {
    const modelo = gamaMedia.map((el) => el.modelo)
    const model = [];
    modelo.forEach((elemento) => {
        if (!model.includes(elemento)) {
            model.push(elemento);
        }
    })

    localStorage.setItem("modelos", model)
    console.log(`Usted puede elgir entre estos modelos:  ${model}`);
}

const lugar = document.getElementById("lugar")
const gamaBajaUbicacion = sacarRepetidos(gamaBaja)
if (boton) {
    gamaBajaUbicacion.map(elemento => {
        // console.log(elemento)  

        lugar.innerHTML += `<option>${elemento}</option>`;

    })
}
function sacarRepetidos(array) {
    const ubicacion = array.map((el) => el.ubicacion)
    const ubi = [];
    ubicacion.forEach((element) => {
        if (!ubi.includes(element)) {
            ubi.push(element);
        }
    })
    return ubi
}

//let autoAlquiler=document.getElementById("autoAlquiler")
//autoAlquiler.innerHTML="<h2>Alquila con confianza en Blue</h2><p>Con más de 30 años en el mercado, somos líderes en alquiler de autos. Miles de personas en Argentina yturistas de todo el mundo nos eligen diariamente para disfrutar sus viajes en la comodidad y confort de nuestros vehículos. No conozcas tu destino, recorrelo. Alquilá un auto con nosotros para poder disfrutar mucho más en tu viaje. Lo importante es disfrutar el camino.</p>";





const fecha = document.getElementById("fechaInicio");
const devolucion = document.getElementById("fechaDevolucion");
console.log(boton);
if (boton) {
    boton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(lugar.value);
        console.log(fecha.value);
        console.log(devolucion.value);
        localStorage.setItem("lugar", lugar.value)
        localStorage.setItem("fecha", fecha.value)
        localStorage.setItem("devolucion", devolucion.value)
        if (lugar.value !== "" && fecha.value !== "" && devolucion.value !== "") {
            window.location.href = "http://127.0.0.1:5500/presupuesto.html"
            //alert(`El lugar de entrega sera en ${lugar.value} el dia  ${fecha.value} y debera ser devuelto el dia ${devolucion.value}`);
        } else {
            // alert(`Completa los campos`);
        }
    });

}
let presupuesto = document.getElementById("presupuesto")

if (presupuesto) {
    let gamaAutoText
    if (localStorage.getItem("gamaAuto") === "a") {
        gamaAutoText = "baja"
    }
    if (localStorage.getItem("gamaAuto") === "b") {
        gamaAutoText = "media"
    }
    //calcular diferencia de fecha

    let inicio = new Date(localStorage.getItem("fecha")).getTime()
    let devolucion = new Date(localStorage.getItem("devolucion")).getTime()
    let dif = devolucion - inicio
    let diff = dif / (24 * 60 * 60 * 1000)
    console.log(diff)
    localStorage.setItem("diff", diff)

    presupuesto.innerHTML += `<p class="presupuesto__">El lugar de entrega sera en <span>${localStorage.getItem("lugar")}</span> el dia <span>${localStorage.getItem("fecha")}</span> y debera ser devuelto el dia <span>${localStorage.getItem("devolucion")}</span></p>`
    //presupuesto.innerHTML +=`<p>El modelo que eligio es de gama ${gamaAutoText.toUpperCase()} por ${localStorage.getItem("diasAlquiler")} dia(s)</p>`
    if (diff === 1) {
        presupuesto.innerHTML += `<p class="presupuesto__">Espero <span>disfrute</span> su dia de alquier!</p>`
    } else {
        presupuesto.innerHTML += `<p class="presupuesto__">Los dias seleccionados son <span>${diff}</span></p>`
    }


}
function prueba(array) {
    const modelo = array.map((el) => el.modelo)
    const mod = [];
    modelo.forEach((element) => {
        if (!mod.includes(element)) {
            mod.push(element);
        }
    })
    console.log(mod);
    localStorage.setItem("modelos", mod)
    console.log(`Usted puede elgir entre estos modelos:  ${mod}`);
    return mod
}

if (botonGamaBaja) {
    botonGamaBaja.addEventListener("click", (e) => {
        gamaAuto = "a"
        localStorage.setItem("gamaAuto", gamaAuto)
        let modelos = prueba(gamaBaja)
        console.log(modelos)
        localStorage.setItem("modelos", JSON.stringify(modelos))
        autos.innerHTML = ``

        modelos.map((elemento, index) => {
            autos.innerHTML += `<p id=${index} class="underlined underlined--gradient">${elemento} </p>`
        })




        modelos.forEach((elemento, index) => {
            document.getElementById(`${index}`).addEventListener("click", (x) => {
                let resultado = (valorBaja * localStorage.getItem("diff"));
                Swal.fire(
                    `El valor del alquiler del ${elemento} gama baja por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$!`,
                    'Haga click para continuar!',
                    'success'
                )
            })
        })
    })
}

if (botonGamaMedia) {
    botonGamaMedia.addEventListener("click", (e) => {
        gamaAuto = "b"
        localStorage.setItem("gamaAuto", gamaAuto)
        let modelos = prueba(gamaMedia)
        console.log(modelos)
        localStorage.setItem("modelos", JSON.stringify(modelos))
        autos.innerHTML = ``

        modelos.map((elemento, index) => {
            autos.innerHTML += `<p id=${index} class="underlined underlined--gradient">${elemento} </p>`
        })




        modelos.forEach((elemento, index) => {
            document.getElementById(`${index}`).addEventListener("click", (x) => {
                let resultado = (valorMedia * localStorage.getItem("diff"));
                Swal.fire(
                    `El valor del alquiler del ${elemento} Gama Media por ${localStorage.getItem("diff")} dias(s) es: ${resultado}$!`,
                    'Haga click para continuar!',
                    'success'
                )
            })
        })
    })

}

const lista = document.getElementById("lugares");
fetch("./data.json")
    .then(response => response.json())
    .then(productos => {
        productos.forEach(producto => {
            const li = document.createElement("li");
            li.innerHTML = `
        <h4>Lugar ${producto.lugar}</h4>
        <p>Stock ${producto.stock}</p>
        <p>Vehiculo ${producto.Vehiculo}</p>
        <hr />
        `;
            lista.append(li);

        })

    })