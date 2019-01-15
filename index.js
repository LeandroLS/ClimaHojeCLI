const commander = require('commander');

const Apixu = require('./obj/Apixu');
const OpenWeatherMap = require('./obj/OpenWeatherMap');

commander.version('1')
    .option('-c, --clima <value>', 'Pega o clima da cidade passada')
    .parse(process.argv);

let OpenWeatherMapResult = OpenWeatherMap.getOpenWeatherMap(commander.clima);
let ApixuResult = Apixu.getApixu(commander.clima);

function changeColor(temperatura){
    if(temperatura >20){
        return `\x1b[33m${temperatura}\x1b[0m`;
    } else {
        return `\x1b[34m${temperatura}\x1b[0m`;
    }
}

Promise.all([OpenWeatherMapResult, ApixuResult]).then((retorno) => {
    console.log(`
    ========================================================================================================
    OpenWeatherMap ==> Cidade: ${retorno[0].city}, Temperatura: ${changeColor(retorno[0].temperature)} 
    Apixu ==> Cidade: ${retorno[1].city}, Temperatura: ${changeColor(retorno[1].temperature)}          
    ========================================================================================================
    `);
});


