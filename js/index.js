const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function countDown(){
    const newYear= new Date(2021,00,01);
    const nowDate= new Date(); 

    const countYear= newYear-nowDate;
    
    const cDays= Math.floor((countYear/1000) /60 / 60 /24);
    
    const cHours= Math.floor((countYear/1000) /60 / 60 % 24);

    const cMinutes= Math.floor((countYear/1000)/60 % 60);
    
    const cSeconds= Math.floor((countYear/1000)%60);

    
    days.innerHTML=addZero(cDays);
    hours.innerHTML=addZero(cHours);
    minutes.innerHTML=addZero(cMinutes);
    seconds.innerHTML=addZero(cSeconds);
}

function addZero(number){
    if(number<10)
    return "0"+number;
    else
        return number;
}

countDown();

setInterval(countDown,1000);





