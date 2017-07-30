var HOUR = 8;
var MINUTE = 31;
var PERIOD = "AM";
var time;

if(PERIOD == "AM"){
    time = "morning";
} else if (PERIOD == "PM"){
    time = "evening";
}   

if(MINUTE > 30){
    console.log("It's almost", HOUR+1,"in the", time);
} else if(MINUTE < 30) {
    console.log("It's just after", HOUR,"in the", time);
}
