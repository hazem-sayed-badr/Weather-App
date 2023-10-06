const apikey="812b74977262499f24cfe950d325461f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchfield=document.querySelector(".search input");
let searchbutton=document.querySelector(".search button");
let weathericon=document.querySelector(".weather-icon");
let weathersection=document.querySelector(".weather");
let errormsg=document.querySelector(".error");
let details=document.querySelector(".details");
let title=document.querySelector(".title");
async function checkweather(city){
    const response= await fetch(apiUrl + city +  `&appid=${apikey}`);
    if(response.status===404){
        errormsg.style.display="block";
        weathersection.style.display="none";
    }
    else{
        title.style.display="none";
        let jsondata=await response.json();
    console.log(jsondata);
    document.querySelector(".city").innerHTML=jsondata.name;
    document.querySelector(".temp").innerHTML=Math.round(jsondata.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=jsondata.main.humidity +"%";
    document.querySelector(".Wind").innerHTML=jsondata.wind.speed + " km/h";
    if(jsondata.weather[0].main==="Clouds"){
        weathericon.src="images/clouds.png";
    }
    else if(jsondata.weather[0].main==="Clear"){
        weathericon.src="images/clear.png";
    }
    else if(jsondata.weather[0].main==="Rain"){
        weathericon.src="images/rain.png";
    }
    else if(jsondata.weather[0].main==="Drizzle"){
        weathericon.src="images/drizzle.png";
    }
    else if(jsondata.weather[0].main==="Mist"){
        weathericon.src="images/mist.png";
    }
 
        details.style.display="flex";
    }
      

}
searchbutton.onclick=function(){
    weathersection.style.display="block";
    let value=searchfield.value;
    if(value===""){
        errormsg.style.display="block";
    }
    searchfield.value="";
    checkweather(value);
}