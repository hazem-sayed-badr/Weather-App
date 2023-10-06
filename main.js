const apikey="812b74977262499f24cfe950d325461f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchfield=document.querySelector(".search input");
let searchbutton=document.querySelector(".search button");
async function checkweather(city){
    const response= await fetch(apiUrl + city +  `&appid=${apikey}`);
    let jsondata=await response.json();
    console.log(jsondata);
    document.querySelector(".city").innerHTML=jsondata.name;
    document.querySelector(".temp").innerHTML=Math.round(jsondata.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=jsondata.main.humidity +"%";
    document.querySelector(".Wind").innerHTML=jsondata.wind.speed + " km/h";

}
searchbutton.onclick=function(){
    let value=searchfield.value;
    if(value===""){
        window.location.reload();
    }
    searchfield.value="";
    checkweather(value);
}