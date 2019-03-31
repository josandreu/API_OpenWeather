const boton = $('#boton');
const ciudad = $('#ciudad');
const contenido = $('#contenido');
const contenido2 = $('#contenido2');
const consulta = $('#consulta');
// sera weather o forecast
let tipoConsulta = '';
// iconos personalizados
const weatherIcons = {
  '200': {
    label: 'thunderstorm with light rain',
    icon: 'storm-showers'
  },

  '201': {
    label: 'thunderstorm with rain',
    icon: 'storm-showers'
  },

  '202': {
    label: 'thunderstorm with heavy rain',
    icon: 'storm-showers'
  },

  '210': {
    label: 'light thunderstorm',
    icon: 'storm-showers'
  },

  '211': {
    label: 'thunderstorm',
    icon: 'thunderstorm'
  },

  '212': {
    label: 'heavy thunderstorm',
    icon: 'thunderstorm'
  },

  '221': {
    label: 'ragged thunderstorm',
    icon: 'thunderstorm'
  },

  '230': {
    label: 'thunderstorm with light drizzle',
    icon: 'storm-showers'
  },

  '231': {
    label: 'thunderstorm with drizzle',
    icon: 'storm-showers'
  },

  '232': {
    label: 'thunderstorm with heavy drizzle',
    icon: 'storm-showers'
  },

  '300': {
    label: 'light intensity drizzle',
    icon: 'sprinkle'
  },

  '301': {
    label: 'drizzle',
    icon: 'sprinkle'
  },

  '302': {
    label: 'heavy intensity drizzle',
    icon: 'sprinkle'
  },

  '310': {
    label: 'light intensity drizzle rain',
    icon: 'sprinkle'
  },

  '311': {
    label: 'drizzle rain',
    icon: 'sprinkle'
  },

  '312': {
    label: 'heavy intensity drizzle rain',
    icon: 'sprinkle'
  },

  '313': {
    label: 'shower rain and drizzle',
    icon: 'sprinkle'
  },

  '314': {
    label: 'heavy shower rain and drizzle',
    icon: 'sprinkle'
  },

  '321': {
    label: 'shower drizzle',
    icon: 'sprinkle'
  },

  '500': {
    label: 'light rain',
    icon: 'rain'
  },

  '501': {
    label: 'moderate rain',
    icon: 'rain'
  },

  '502': {
    label: 'heavy intensity rain',
    icon: 'rain'
  },

  '503': {
    label: 'very heavy rain',
    icon: 'rain'
  },

  '504': {
    label: 'extreme rain',
    icon: 'rain'
  },

  '511': {
    label: 'freezing rain',
    icon: 'rain-mix'
  },

  '520': {
    label: 'light intensity shower rain',
    icon: 'showers'
  },

  '521': {
    label: 'shower rain',
    icon: 'showers'
  },

  '522': {
    label: 'heavy intensity shower rain',
    icon: 'showers'
  },

  '531': {
    label: 'ragged shower rain',
    icon: 'showers'
  },

  '600': {
    label: 'light snow',
    icon: 'snow'
  },

  '601': {
    label: 'snow',
    icon: 'snow'
  },

  '602': {
    label: 'heavy snow',
    icon: 'snow'
  },

  '611': {
    label: 'sleet',
    icon: 'sleet'
  },

  '612': {
    label: 'shower sleet',
    icon: 'sleet'
  },

  '615': {
    label: 'light rain and snow',
    icon: 'rain-mix'
  },

  '616': {
    label: 'rain and snow',
    icon: 'rain-mix'
  },

  '620': {
    label: 'light shower snow',
    icon: 'rain-mix'
  },

  '621': {
    label: 'shower snow',
    icon: 'rain-mix'
  },

  '622': {
    label: 'heavy shower snow',
    icon: 'rain-mix'
  },

  '701': {
    label: 'mist',
    icon: 'sprinkle'
  },

  '711': {
    label: 'smoke',
    icon: 'smoke'
  },

  '721': {
    label: 'haze',
    icon: 'day-haze'
  },

  '731': {
    label: 'sand, dust whirls',
    icon: 'cloudy-gusts'
  },

  '741': {
    label: 'fog',
    icon: 'fog'
  },

  '751': {
    label: 'sand',
    icon: 'cloudy-gusts'
  },

  '761': {
    label: 'dust',
    icon: 'dust'
  },

  '762': {
    label: 'volcanic ash',
    icon: 'smog'
  },

  '771': {
    label: 'squalls',
    icon: 'day-windy'
  },

  '781': {
    label: 'tornado',
    icon: 'tornado'
  },

  '800': {
    label: 'clear sky',
    icon: 'sunny'
  },

  '801': {
    label: 'few clouds',
    icon: 'cloudy'
  },

  '802': {
    label: 'scattered clouds',
    icon: 'cloudy'
  },

  '803': {
    label: 'broken clouds',
    icon: 'cloudy'
  },

  '804': {
    label: 'overcast clouds',
    icon: 'cloudy'
  },

  '900': {
    label: 'tornado',
    icon: 'tornado'
  },

  '901': {
    label: 'tropical storm',
    icon: 'hurricane'
  },

  '902': {
    label: 'hurricane',
    icon: 'hurricane'
  },

  '903': {
    label: 'cold',
    icon: 'snowflake-cold'
  },

  '904': {
    label: 'hot',
    icon: 'hot'
  },

  '905': {
    label: 'windy',
    icon: 'windy'
  },

  '906': {
    label: 'hail',
    icon: 'hail'
  },

  '951': {
    label: 'calm',
    icon: 'sunny'
  },

  '952': {
    label: 'light breeze',
    icon: 'cloudy-gusts'
  },

  '953': {
    label: 'gentle breeze',
    icon: 'cloudy-gusts'
  },

  '954': {
    label: 'moderate breeze',
    icon: 'cloudy-gusts'
  },

  '955': {
    label: 'fresh breeze',
    icon: 'cloudy-gusts'
  },

  '956': {
    label: 'strong breeze',
    icon: 'cloudy-gusts'
  },

  '957': {
    label: 'high wind, near gale',
    icon: 'cloudy-gusts'
  },

  '958': {
    label: 'gale',
    icon: 'cloudy-gusts'
  },

  '959': {
    label: 'severe gale',
    icon: 'cloudy-gusts'
  },

  '960': {
    label: 'storm',
    icon: 'thunderstorm'
  },

  '961': {
    label: 'violent storm',
    icon: 'thunderstorm'
  },

  '962': {
    label: 'hurricane',
    icon: 'cloudy-gusts'
  }
};

// FUNCIONES

const llamarAPI = miUrl => {
  // e.preventDefault();
  $.ajax({
    // url personalizada
    url: miUrl,
    dataType: 'json',
    success: function(response) {
      console.log(response);
      console.log(tipoConsulta);
      let miContenido = '';
      if (tipoConsulta === 'weather') {
        // reseteo el contenido
        contenido2.html('');
        // estas variables las sacamos del objeto json que retorna la llamada ajax
        let lugar = response.name; // accedemos al nombre de la ciudad
        let pais = response.sys.country;
        let presion = response.main.pressure;
        let temperatura = response.main.temp;
        let viento = response.wind.speed;
        /*
      let rutaIcono = `http://openweathermap.org/img/w/${
        response.weather[0].icon
      }.png`;
      */
        let descripcion = response.weather[0].description;
        // para los iconos
        let code = response.weather[0].id;
        let prefix = 'wi wi-';
        let icon = weatherIcons[code].icon;
        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
          icon = 'day-' + icon;
        }
        // Finally tack on the prefix.
        icon = prefix + icon;
        let rutaIcono = '';
        miContenido =
          /*html*/
          `   <div class="mt-5">
                <div class="media">
                <i class="${icon} icon-weather align-self-center mr-4"></i>
                  <div class="media-body">
                    <h4 class="mt-0"><b>${lugar}</b> (${pais})</h4>
                    <p>${descripcion}</p>
                    <p><span class="temperatura">${temperatura}°</span></p>
                    <p>Presión atmosférica: <b>${presion}</b> hPa</p>
                    <p>Viento: <b>${viento}</b> km/h</p>
                  </div>
                </div>
              </div>
                `;
        // document.getElementById('contenido').innerHTML = contenido;
        contenido.html(miContenido);
      } else {
        // reseteo el contenido
        contenido.html('');
        let lugar = response.city.name;
        let pais = response.city.country;
        miContenido += `<h3 class="text-primary">Previsión para los próximos 3 días en <b>${lugar} (${pais})</b></h3>`;
        // se mostrará el pronóstico para los próximos 3 días
        // la API los da cada 3 hora por lo que itero cada 8 resultados (8 * 3 = 24)
        for (let index = 0; index < 24; index += 8) {
          let descripcion = response.list[index].weather[0].description;
          let presion = response.list[index].main.pressure;
          let temperatura = response.list[index].main.temp;
          let viento = response.list[index].wind.speed;
          let code = response.list[index].weather[0].id;
          let prefix = 'wi wi-';
          let icon = weatherIcons[code].icon;
          let fecha = response.list[index].dt_txt;
          let anio = fecha.slice(0, 4);
          let mes = fecha.slice(5, 7);
          let dia = fecha.slice(8, 10);
          // If we are not in the ranges mentioned above, add a day/night prefix.
          if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
          }
          icon = prefix + icon;
          miContenido +=
            /*html*/
            `
        <div class="col-3 d-inline-flex">
          <div class="mt-5">
            <div class="media">
            <i class="${icon} icon-weather-min align-self-center mr-4"></i>
              <div class="media-body">
                <h5 class="mt-0"><b>${lugar}</b> (${pais})</h5>
                <p>${descripcion}</p>
                <p><span class="temperatura-min">${temperatura}°</span></p>
                <p>${dia}-${mes}-${anio}</p>
              </div>
            </div>
          </div>
        </div>
        `;
        }

        contenido2.html(miContenido);
      }
    },
    error: function() {
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

const detectarConsulta = e => {
  if (consulta.is(':checked')) {
    tipoConsulta = 'forecast';
  } else {
    tipoConsulta = 'weather';
  }

  return tipoConsulta;
};

const prepararUrl = e => {
  let tipoConsulta = detectarConsulta();
  let key = '8e11f356c400d9ab531668301176322e';
  // https://api.openweathermap.org/data/2.5/${tipoConsulta}?
  let miUrl = `https://api.openweathermap.org/data/2.5/${tipoConsulta}?`;
  let c = ciudad.val();
  miUrl += 'q=' + c + ',es';
  miUrl += '&APPID=' + key;
  miUrl += '&units=metric';
  miUrl += '&lang=es';

  llamarAPI(miUrl);
};

const detectarTecla = e => {
  // console.log(e); // es el campo keyCode del dom el que nos interesa
  // console.log(e.keyCode); // tecla 13 (enter)
  if (e.keyCode === 13) {
    prepararUrl(); // cuando le demos al enter, llama a la función prepararUrl()
  }
};

const inicializar = () => {
  detectarConsulta();
};

// EVENTOS
boton.on('click', prepararUrl);
// añadimos un listener a la barra de busqueda, actuará cuando pulsemos una tecla (queremos con la tecla enter)
ciudad.on('keyup', detectarTecla);
// listener toggle button
consulta.on('click', detectarConsulta);

$(document).ready(function() {
  inicializar();
  $('[data-toggle="tooltip"]').tooltip();
});

/*
<div class="col-3">

</div>
<div class="col-3">

</div>
<div class="col-3">

</div>
*/
