window.addEventListener('load', getDatos);

function limpiarFecha(fecha){
    //Metodo auxiliar que permite obtener la fecha parseando el string
    return fecha.substring(0,10);
}

function limpiarDatos(texto){
    //Metodo que a partir de los datos recibidos, obtiene, el nombre de las fechas patrias y la fecha
    let nombresFechas = []
    let fechas = []

    i = 0;
    salida = "";
    while(i < texto.length){
        fecha = limpiarFecha(texto[i].date);
        nombre = texto[i].name;
        nombresFechas.push(nombre);
        fechas.push(fecha);
        i ++;
    }

    return nombresFechas, fechas;
}

function mostrarContenido(nombresFechas, fechas){
    // metodo que muestra el contenido obtenido de la API
    let i = 0;
    let elementoContenedor;
    while (i < nombresFechas.length){
        elementoContenedor = document.createElement('div');
        elementoContenedor.textContent = JSON.stringify("⚪ " + fechas[i] + " " + nombresFechas[i]);
        document.body.appendChild(elementoContenedor);
        i ++;
    }
}

function getDatos(){
    let nombresFechas, fechas = [];

    fetch('https://api.generadordni.es/v2/holidays/holidays?country=AR&year=2023')
        .then(response => response.json())
        .then(data => {
            nombresFechas, fechas = limpiarDatos(data);
            mostrarContenido(nombresFechas, fechas);
            
        
        
  })
  .catch(error => console.error(error));
}