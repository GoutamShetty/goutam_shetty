// var button = document.querySelector('.form-inline')
// var inputvalue = document.querySelector('.search-input')

var nam = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var country = document.querySelector('.country')
const params=(new URL(document.location)).searchParams;
const inputvalue=params.get('search')

window.addEventListener('load',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue+'&appid=12dfd2753ed8f441dad0d6cf2dcb9578')
    .then(response => response.json())
    .then(data => {
        var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var descvalue = data['weather'][0]['description'];
        var countryvalue = data['sys']['country'];

        nam.innerHTML= namevalue;
        country.innerHTML=countryvalue;
        temp.innerHTML= "Temperature rightnow is: "+tempvalue+" kelvin";
        desc.innerHTML= "Weather: "+descvalue;
        console.log(data)
    })

.catch(err=> alert("wrong city name"))


})
