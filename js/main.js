const boton = $('#boton');
const ciudad = $('#ciudad');
const contenido = $('#contenido');

// FUNCIONES

const llamarAPI = (miUrl) => {
    // e.preventDefault();
    $.ajax({
        // url personalizada
        url: miUrl,
        dataType: 'json',
        success: function (response) {
            console.log(response);
            // estas variables las sacamos del objeto json que retorna la llamada ajax
            let miContenido = '';
            let lugar = response.name; // accedemos al nombre de la ciudad
            let pais = response.sys.country;
            let temperatura = response.main.temp;
            let rutaIcono = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
            let descripcion = response.weather[0].description;
            miContenido =
                /*html*/
                `
                <figure class="figure">
                    <img src="${rutaIcono}" width="150px" class="figure-img img-fluid rounded" alt="${lugar}">
                    <figcaption class="figure-caption">
                    <b>${lugar}</b> (${pais}) <span class="temperatura rounded ml-2">${temperatura}°</span>
                    <p class="mt-3"><i>${descripcion}</i></p>
                    </figcaption>
                </figure>
                `;
            // document.getElementById('contenido').innerHTML = contenido;
            contenido.html(miContenido);

        },
        error: function () {
            let miContenido =
                /*html*/
                `
                <div class="bg-danger p-5 rounded">
                    <p>Ha habido un error en la solicitud a la API</p>
                    <p>Tal vez la localidad <b>${ciudad.val()}</b> no exista...</p>
                </div>
                `;
            contenido.html(miContenido);
        }
    });
    // limpiamos el contenido del input de la busqueda una vez realizada la busqueda
    ciudad.val('');
};


const prepararUrl = (e) => {
    let key = '8e11f356c400d9ab531668301176322e';
    let miUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    let c = ciudad.val();
    miUrl += 'q=' + c + ',es';
    miUrl += '&APPID=' + key;
    miUrl += '&units=metric';
    miUrl += '&lang=es';

    llamarAPI(miUrl);

};

const inicializar = () => {

};

const detectarTecla = (e) => {
    console.log(e); // es el campo keyCode del dom el que nos interesa
    console.log(e.keyCode); // tecla 13 (enter)
    if (e.keyCode === 13) {
        prepararUrl(); // cuando le demos al enter, llama a la función prepararUrl()
    }

};

// EVENTOS
boton.on('click', prepararUrl);
// añadimos un listener a la barra de busqueda, actuará cuando pulsemos una tecla (queremos con la tecla enter)
ciudad.on('keyup', detectarTecla);
/*
$(document).ready(function () {
    inicializar();
});
*/