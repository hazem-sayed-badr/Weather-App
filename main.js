const apikey="812b74977262499f24cfe950d325461f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkweather(){
    const response= await fetch(apiUrl + `&appid=${apikey}`);
    let jsondata=await response.json();
    console.log(jsondata);
    document.querySelector(".city").innerHTML=jsondata.name;
    document.querySelector(".temp").innerHTML=Math.round(jsondata.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=jsondata.main.humidity +"%";
    document.querySelector(".Wind").innerHTML=jsondata.wind.speed + " km/h";

}
checkweather();