const boton = $('#boton');
const ciudad = $('#ciudad');


// FUNCIONES

const llamarAPI = (miUrl) => {
    // e.preventDefault();
    $.ajax({
        // url personalizada
        url: miUrl,
        dataType: 'json',
        success: function (response) {
            console.log(response);

        },
        error: function () {
            console.log("Ha habido un error en la consulta Ajax...");
        }
    });
};

const prepararUrl = (e) => {
    let key = '8e11f356c400d9ab531668301176322e';
    let miUrl = 'api.openweathermap.org/data/2.5/weather?';
    // atributo TARGET dentro del DOM, aunque no es necesario, lo dejamos
    if (e.target.id === 'boton') {
        let c = ciudad.val();
        miUrl += 'q=' + c;
        miUrl += '&APPID=' + key;
    }
    llamarAPI(miUrl);

};

const inicializar = () => {

};



// EVENTOS
boton.on('click', prepararUrl);
/*
$(document).ready(function () {
    inicializar();
});
*/