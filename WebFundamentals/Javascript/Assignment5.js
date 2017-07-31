function printRange(startPoint, endPoint, skipAmount){
    var output = "";
    if(skipAmount == undefined){
        skipAmount = 1;
    }
    for(var i= startPoint; i< endPoint; i=i+skipAmount){
        output = output + i + ',';
    }
    console.log(output);
}

printRange(2,10,1);