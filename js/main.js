"use strict"

function A(){
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x + y;
    document.getElementById("z").value = z;
}
function S(){
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x - y;
    document.getElementById("z").value = z;
}
function M(){
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x * y;
    document.getElementById("z").value = z;
}
function D(){
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x / y;
    document.getElementById("z").value = z;
}
function t(){
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = x * y / 2;
    document.getElementById("z").value = z;
}
function C(){
    document.getElementById("x").value = 0;
    document.getElementById("y").value = 0;
    document.getElementById("z").value = 0;
}
