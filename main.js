const apikey="812b74977262499f24cfe950d325461f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkweather(){
    const response= await fetch(apiUrl + `&appid=${apikey}`);
}