const commander = require('commander');

const Apixu = require('./obj/Apixu');
const HGWeather = require('./obj/HGWeather');
const OpenWeatherMap = require('./obj/OpenWeatherMap');

commander.version('1')
    .option('-c, --clima <value>', 'Pega o clima da cidade passada')
    .parse(process.argv);

let OpenWeatherMapResult = OpenWeatherMap.getOpenWeatherMap(commander.clima);
let ApixuResult = Apixu.getApixu(commander.clima);
let HGWeatherResult = HGWeather.getHGWeather(commander.clima);

OpenWeatherMapResult.then(item => console.log(`OpenWeatherMap:`, `Cidade:`, item.city, `Temperatura:`, item.temperature + 'ºC'));
ApixuResult.then(item => console.log(`Apixu:`, `Cidade:`, item.city, `Temperatura:`, item.temperature + 'ºC'));
HGWeatherResult.then(item => console.log(`HGWeather:`, `Cidade:`, item.city, `Temperatura:`, item.temperature + 'ºC'));


