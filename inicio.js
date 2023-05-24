window.addEventListener('load', getDatos);
function parsearFecha(fecha){
    fecha = fecha.substring(0,10)
    return fecha
}

function limpiarFecha(fecha){
    return fecha.substring(0,10);
}

function limpiarDatos(texto){
    i = 0;
    salida = "";
    while(i < texto.length){
        fecha = limpiarFecha(texto[i].date);
        nombre = texto[i].name;
        salida += fecha + nombre + "/n";
    }

    return salida;
}

function getDatos(){
    fetch('https://api.generadordni.es/v2/holidays/holidays?country=AR&year=2023')
        .then(response => response.json())
        .then(data => {
            datos = limpiarDatos(data);
            console.log(datos);   
        
        
  })
  .catch(error => console.error(error));
}