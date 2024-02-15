let btn = document.querySelector("button"); 
let ipt = document.querySelector("input");
let searchTerm = ""

// Title 
let movieTitle = document.querySelector(".movieTitle");
let img = document.querySelector("img");
let plot = document.querySelector(".plot");

// Info 
let releasedDate = document.querySelector(".releasedDate");
let genre = document.querySelector(".genre");
let runTime = document.querySelector(".runTime");
let boxOffice = document.querySelector(".boxOffice");
let rated = document.querySelector(".rated");
let rating = document.querySelector(".rating");


btn.addEventListener("click", (e) => {

    if(ipt.value !== "") {
        
        searchTerm = ipt.value.replaceAll(" ", "+");
        ipt.value = "";
        fetch(`http://www.omdbapi.com/?apikey=606b2490&t=${searchTerm}`)
        .then((res) => {
            console.log("RESOLVED", res);
            return res.json();
        })
        .then((data) => {

            // Title
            movieTitle.innerHTML = `Title: ${data.Title}`;
            img.setAttribute("src", data.Poster);
            img.setAttribute("alt", `${data.Title} Poster`);
            plot.innerHTML = `plot: ${data.Plot}`;

            // Info
            console.log(data);
            

            releasedDate.innerHTML = `Released Date: ${data.Released}`;
            genre.innerHTML = `Genre ${data.Genre}`; 
            runTime.innerHTML = `Runtime: ${data.Runtime}`; 
            boxOffice.innerHTML = `Box Office: ${data.BoxOffice}`; 
            rated.innerHTML = `Rated: ${data.Rated}`;
            rating.innerHTML = `${data.Ratings[0].Source} : ${data.Ratings[0].Value},
                                ${data.Ratings[1].Source} : ${data.Ratings[1].Value},  
                                ${data.Ratings[2].Source} : ${data.Ratings[2].Value} 
            `;
        })
        .catch((e) => {
            console.log("ERROR");
        })
    }
});