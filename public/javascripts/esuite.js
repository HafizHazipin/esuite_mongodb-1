//get & Display local time and day
setInterval(()=>{
    const current_time = moment();
    const local_day = current_time.format('dddd'); 
    const local_time = current_time.format('LTS');
    document.getElementById("localTime").innerHTML = local_time;
    document.getElementById("localDay").innerHTML = local_day;
    //console.log(local_time);
    }), 1000;

//Get current date
var currentDate = document.getElementById("currentDate");
let today = new Date().toLocaleDateString();

//Display current date
currentDate.innerHTML = (today); 