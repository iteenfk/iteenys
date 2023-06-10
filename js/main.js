"use strict"
let seconds = 0;

function A(){
    let time = document.getElementById("time").value;
    let unit = document.getElementById("unit").value;

    if(unit === "秒"){
        seconds = time;
    }else if(unit === "分"){
    seconds = time * 60;
    }else if(unit === "時間"){
     seconds = time * 60 * 60;
    }else if(unit === "日"){
    seconds = time * 60 * 60 * 24;
    }else if(unit === "週"){
     seconds = time * 60 * 60 * 24 * 7;
    }else if(unit === "月"){
    seconds = time * 60 * 60 * 24 * 30;
    }else if(unit === "年"){
     seconds = time * 60 * 60 * 24 * 365;
    }
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months= days / 30;
    const years = days / 365;

    document.getElementById("seconds").innerHTML = Number(seconds).toFixed(2) + "秒";
    document.getElementById("minutes").innerHTML = Number(minutes).toFixed(2) + "分";
    document.getElementById("hours").innerHTML = Number(hours).toFixed(2) + "時間";
    document.getElementById("days").innerHTML = Number(days).toFixed(2) + "日";
    document.getElementById("weeks").innerHTML = Number(weeks).toFixed(2) + "週";
    document.getElementById("months").innerHTML = Number(months).toFixed(2) + "月";
    document.getElementById("years").innerHTML = Number(years).toFixed(2) + "年";
}


