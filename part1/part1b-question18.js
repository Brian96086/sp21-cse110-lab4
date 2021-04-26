function logDateEverySecond(){
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

//setInterval(logDateEverySecond, 1000);

//Q19
function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);},1000);
    setTimeout(function(){console.log(3);},0);
    console.log(4);
} 
printNums();