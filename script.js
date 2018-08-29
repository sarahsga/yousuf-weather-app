$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=0fb72d578d3fef25752255137659a4df",
    success: function (data) {


        document.querySelector(".title").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = "Temperature  " + data.main.temp;
        document.querySelector(".main").innerHTML = "Humididty  " + data.main.humidity;
        document.querySelector(".wind-speed").innerHTML = data.weather[0].main;


        console.log("Success!!!")
    },
    error: function (error) {
        console.log(error.responseJSON.message),
            console.log("Error!!!")
    }
}

)