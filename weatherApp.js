// https://api.openweathermap.org/data/2.5/forecast?lat=49.22610&lon=-123.09929&appid=9c4f66297f3591d5e9fa88335b028d7b
fetch("https://api.openweathermap.org/data/2.5/forecast?lat=49.22610&lon=-123.09929&appid=9c4f66297f3591d5e9fa88335b028d7b&units=metric")
.then((res) => {
    console.log("Resolved!", res);
    return res.json();
}).then((data) => {
    let ourData = data;
    
    let temp = "";
    let valuesArr = [];
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
    } else if(valuesArr.length === 6) {
        let arr0 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[0]);
        let arr1 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[1]);
        let arr2 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[2]);
        let arr3 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[3]);
        let arr4 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[4]);
        let arr5 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === valuesArr[5]);

        console.log(arr0);
        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
        console.log(arr4);
        console.log(arr5);

    }





    //console.log(valuesArr);

    // This one works we just need the five values
    //console.log(data);
    //let arr1 = data.list.filter((wthr) => wthr.dt_txt.slice(0,10) === "2024-02-07");
    //console.log(arr1);
})
.catch((e) => {
    console.log("ERROR!", e);
});