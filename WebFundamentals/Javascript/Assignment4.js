//For a Few Billion
var reward = 0.01;
var flag = true;
var dayToReachThousand= 0;
var days = 30;
for (var i=0; i < days; i++){
    if(i==0){
        reward = 0.01;
    } else {
        reward = reward * 2;
    }
    if(reward >= 10000 && flag == true){
        dayToReachThousand = i;
        flag = false;
    }
    //console.log("day-",i,"::reward-", reward);
}

console.log(reward);
console.log("Day to reach $10,000-",dayToReachThousand );