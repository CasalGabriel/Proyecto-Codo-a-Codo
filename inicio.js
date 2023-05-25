window.addEventListener('load', getDatos);

function limpiarFecha(fecha) {
    //Metodo auxiliar que permite obtener la fecha parseando el string
    return fecha.substring(0, 10);
}

function limpiarDatos(texto) {
    //Metodo que a partir de los datos recibidos, obtiene, el nombre de las fechas patrias y la fecha
    let listaTitulos = []
    let listaDiario = []

    i = 0;
    var largo = Object.keys(texto).length;
    
    while (i < 10) {
        articulo = texto.articles[i];
        diario = articulo.author;
        titulo = articulo.title;
        listaTitulos.push(titulo);
        listaDiario.push(diario);
        i++;
    }

    return [listaTitulos, listaDiario];
}

function mostrarContenido(diarios, titulos) {
    // metodo que muestra el contenido obtenido de la API
    let i = 0;
    let elementoContenedor;
    while (i < titulos.length) {

        //creo los elementos a usar
        elementoContenedor = document.createElement('a');
        let divContenedor = document.createElement('div');
        let tituloNoticia = document.createElement('h3');
        let contenidoNoticia = document.createElement('p'); 
        
        let contenido = diarios[i];
        let tituloElemento = titulos[i];
        //Asigno contenido:
        tituloNoticia.textContent = "🔴 " + tituloElemento;
        contenidoNoticia.textContent = contenido;

        //Asigno clases:
        tituloNoticia.classList.add("tituloApi");
        contenidoNoticia.classList.add("contenidoApi");
        divContenedor.classList.add("divContenedor");
        
        //Armo estructura:
        divContenedor.appendChild(tituloNoticia);
        divContenedor.appendChild(contenidoNoticia);
        
        document.body.appendChild(divContenedor);
        i++;
    }
}

async function getDatos() {
    var url = 'https://newsapi.org/v2/top-headlines?' + 
    'country=ar&' +
    'apiKey=19bf50de65cb461bb2e89e7f5b4ef347';

    var req = new Request(url);

    let response = await fetch(req);
    let data = await response.json();
    // Aquí puedes guardar el objeto JSON en una variable
    let miVariable = data;
    let [titulos, diarios] = limpiarDatos(miVariable);
    mostrarContenido(titulos, diarios);
}