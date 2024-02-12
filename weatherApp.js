fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.22610&lon=-123.009929&appid=9c4f66297f3591d5e9fa88335b028d7b&units=metric")
.then((res) => {
    console.log("Resolved!", res);
    return res.json();

}).then((data) => {

    function convertMilitaryToStandardTime(militaryTime) {
        // Split the military time string into hours and minutes
        let timeParts = militaryTime.split(':');
        let militaryHours = parseInt(timeParts[0]);
        let militaryMinutes = parseInt(timeParts[1]);
    
        // Convert military hours to standard hours
        let standardHours = (militaryHours > 12) ? (militaryHours - 12) : militaryHours;
        // Determine AM or PM
        let period = (militaryHours >= 12) ? 'PM' : 'AM';
        
        // Add leading zero for single digit minutes
        let standardMinutes = (militaryMinutes < 10) ? "0" + militaryMinutes : militaryMinutes;
    
        // Construct the standard time string
        let standardTime = standardHours + ':' + standardMinutes + ' ' + period;
    
        return standardTime;
    }

    let date = new Date();
    let strDate = date.toString();
    let currTime = convertMilitaryToStandardTime(strDate.slice(16,24));
    let currDate = strDate.slice(0,10) + " " +  currTime;

    // creating Javascript selctors
    let vanTime = document.querySelector(".time");
    let mainTemp = document.querySelector(".mainTemp");
    let mainWeather = document.querySelector(".mainWeather");
    let actualWeather = document.querySelector(".actualWeather");
    let descriptionWeather = document.querySelector(".descriptionWeather");
    let htemp = document.querySelector(".high"); 
    let ltemp = document.querySelector(".low");

    // setting values for our selectors 
    vanTime.innerHTML = currDate;
    mainTemp.innerHTML = `${data.main.temp}ºC`;
    actualWeather.innerHTML = data.weather[0].main; 
    if(actualWeather.innerHTML === "Rain") {
        let weatherImg = document.createElement('img');
        weatherImg.setAttribute("src", "icons/raining.png");
        mainWeather.appendChild(weatherImg);
    } else if(actualWeather.innerHTML === "Clouds") {
        let weatherImg = document.createElement('img');
        weatherImg.setAttribute("src", "icons/cloud.png");
        mainWeather.appendChild(weatherImg);
    } else if(actualWeather.innerHTML === "Snow") {
        let weatherImg = document.createElement('img');
        weatherImg.setAttribute("src", "icons/snow.png");
        mainWeather.appendChild(weatherImg);
    } else if(actualWeather.innerHTML === "Clear") {
        let weatherImg = document.createElement('img');
        weatherImg.setAttribute("src", "icons/sun.png");
        mainWeather.appendChild(weatherImg);
    }


    descriptionWeather.innerHTML = data.weather[0].description;
    htemp.innerHTML = ` H:${data.main.temp_max}ºC`; 
    ltemp.innerHTML = `L:${data.main.temp_min}ºC`;

}).catch((e) => {
    console.log("ERROR");
});

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.22610&lon=-123.09929&appid=9c4f66297f3591d5e9fa88335b028d7b&units=metric")
.then((res) => {
    console.log("Resolved!", res);
    return res.json();
}).then((data) => {
    let ourData = data;
    const xDayForecast = document.querySelector(".xDay");
    
    let temp = "";
    let valuesArr = [];

    function convertMilitaryToStandardTime(militaryTime) {
        // Split the military time string into hours and minutes
        let timeParts = militaryTime.split(':');
        let militaryHours = parseInt(timeParts[0]);
        let militaryMinutes = parseInt(timeParts[1]);
    
        // Convert military hours to standard hours
        let standardHours = (militaryHours > 12) ? (militaryHours - 12) : militaryHours;
        // Determine AM or PM
        let period = (militaryHours >= 12) ? 'PM' : 'AM';
        
        // Add leading zero for single digit minutes
        let standardMinutes = (militaryMinutes < 10) ? "0" + militaryMinutes : militaryMinutes;
    
        // Construct the standard time string
        let standardTime = standardHours + ':' + standardMinutes + ' ' + period;
    
        return standardTime;
    }
    
    for(let i =0; i < data.list.length; i++) {
        
        //console.log(data.list[i].dt_txt.slice(0,10));
        if(temp !== data.list[i].dt_txt.slice(0,10)) {
            temp = data.list[i].dt_txt.slice(0,10);
            valuesArr.push(temp);
        }
    }

    // Two Conditions: One condition for the case we have 6 days and the other for the case if we have five days 

    if(valuesArr.length === 5){

        let arr0 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[0]);
        let arr1 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[1]);
        let arr2 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[2]);
        let arr3 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[3]);
        let arr4 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[4]);

        for(let j =0; j < 5; j++) {
            let newDate = new Date(valuesArr[j]);
            let newDiv = document.createElement('div');
            let h1 = document.createElement('h1');
            newDiv.classList.add("day");
            
            if(newDate.getDay() === 0) {
                h1.innerHTML = "Monday";
            } else if(newDate.getDay() === 1) {
                h1.innerHTML = "Tuesday";
            } else if(newDate.getDay() === 2) {
                h1.innerHTML = "Wedensday";
            }  else if(newDate.getDay() === 3) {
                h1.innerHTML = "Thursday";
            } else if(newDate.getDay() === 4) {
                h1.innerHTML = "Friday";
            }   else if(newDate.getDay() === 5) {
                h1.innerHTML = "Saturday";
            } else if(newDate.getDay() === 6) {
                h1.innerHTML = "Sunday";
            }

            newDiv.appendChild(h1);
            xDayForecast.appendChild(newDiv);
        }

        const dOfWeek = document.querySelectorAll('.day');
        const arrOfArrs = [arr0, arr1, arr2, arr3, arr4, arr5];

        for(let k =0; k < 6; k++) {
            
            let len = arrOfArrs[k].length;

            for(let l = 0; l < len; l++)  {
                let weatherBlock = document.createElement('div');
                weatherBlock.classList.add("wBlock");
                dOfWeek[k].appendChild(weatherBlock);

                let firstItem = document.createElement('h6');
                firstItem.innerHTML = arrOfArrs[k][l].main.temp + "ºC";
                weatherBlock.appendChild(firstItem);

                let secondItem = document.createElement('h6');
                secondItem.innerHTML = arrOfArrs[k][l].weather[0].main;
                weatherBlock.appendChild(secondItem);

                let thirdItem = document.createElement('h6'); 
                if(convertMilitaryToStandardTime(arrOfArrs[k][l].dt_txt.slice(11,19)) === "0:00 AM") {
                    thirdItem.innerHTML = "12:00 AM";
                } else {
                    thirdItem.innerHTML = convertMilitaryToStandardTime(arrOfArrs[k][l].dt_txt.slice(11,19));
                }
                weatherBlock.appendChild(thirdItem);


            }
        }

    } else if(valuesArr.length === 6) {
        let arr0 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[0]);
        let arr1 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[1]);
        let arr2 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[2]);
        let arr3 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[3]);
        let arr4 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[4]);
        let arr5 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[5]);

        for(let j =0; j < 6; j++) {
            let newDate = new Date(valuesArr[j]);
            let newDiv = document.createElement('div');
            let h1 = document.createElement('h1');
            newDiv.classList.add("day");
            
            
            if(newDate.getDay() === 0) {
                h1.innerHTML = "Monday";
            } else if(newDate.getDay() === 1) {
                h1.innerHTML = "Tuesday";
            } else if(newDate.getDay() === 2) {
                h1.innerHTML = "Wedensday";
            }  else if(newDate.getDay() === 3) {
                h1.innerHTML = "Thursday";
            } else if(newDate.getDay() === 4) {
                h1.innerHTML = "Friday";
            }   else if(newDate.getDay() === 5) {
                h1.innerHTML = "Saturday";
            } else if(newDate.getDay() === 6) {
                h1.innerHTML = "Sunday";
            }

            newDiv.appendChild(h1);
            xDayForecast.appendChild(newDiv);
        }
        const dOfWeek = document.querySelectorAll('.day');
        const arrOfArrs = [arr0, arr1, arr2, arr3, arr4, arr5];

        for(let k =0; k < 6; k++) {
            
            let len = arrOfArrs[k].length;

            for(let l = 0; l < len; l++)  {
                let weatherBlock = document.createElement('div');
                weatherBlock.classList.add("wBlock");
                dOfWeek[k].appendChild(weatherBlock);

                let firstItem = document.createElement('h6');
                firstItem.innerHTML = arrOfArrs[k][l].main.temp + "ºC";
                weatherBlock.appendChild(firstItem);

                let secondItem = document.createElement('h6');
                secondItem.innerHTML = arrOfArrs[k][l].weather[0].main;
                weatherBlock.appendChild(secondItem);

                let thirdItem = document.createElement('h6'); 
                if(convertMilitaryToStandardTime(arrOfArrs[k][l].dt_txt.slice(11,19)) === "0:00 AM") {
                    thirdItem.innerHTML = "12:00 AM";
                } else {
                    thirdItem.innerHTML = convertMilitaryToStandardTime(arrOfArrs[k][l].dt_txt.slice(11,19));
                }
                weatherBlock.appendChild(thirdItem);
            }
        }
    }
})
.catch((e) => {
    console.log("ERROR!", e);
});