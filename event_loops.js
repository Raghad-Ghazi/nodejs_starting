let request = require('request')
let apiKey='1f11447cda7e59c9d1fb380c0c78fb74';
const CITIES=['Delhi','Kolkata','Banglore'];
const city = CITIES[Math.floor(Math.random()*CITIES.length)];
let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
request(url,function(err,response,body){
    console.log('Fetching the weather data for city : '+city);
    if(err){
        console.log('Theres an error getting weather data.')
    }else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degress in ${weather.name}! `;
        console.log(message);
    }
    greet();
});


function greet(){
    console.log('Weather data is fecthed!');
}
