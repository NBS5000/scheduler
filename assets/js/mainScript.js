/*
Homework wk5
scheduler
-Steve Barry-
javascript file
*/

function open(){
    checkEvents();
    load();
    elapse();
}

function elapse(){
    setInterval(timeInterval, 1000);
    function timeInterval(){
        document.getElementById("currentDay").innerHTML = moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
        var saved = JSON.parse(localStorage.getItem("eventList"));
        var loop = 0;
        var loopTime = 9;
        // var nowTime = moment().format("H");
        var nowTime = "8";
        while(loopTime < 19){

            var check = saved[loop].event;
            var name = loopTime + "text";
            var match = document.getElementById(name).value;
            if(check == match){
                document.getElementById(name).style.boxShadow = "none";
            }else{
                document.getElementById(name).style.boxShadow = "0px 0px 15px Red";

            }
            var row = "block"+loopTime;
            var tArea = loopTime+"text";
            if(nowTime > loopTime){
                document.getElementById(row).style.backgroundColor = "lightgrey";
                document.getElementById(row).style.color = "darkgrey";
                document.getElementById(tArea).disabled = true;
            }else if(nowTime == loopTime){
                document.getElementById(row).style.backgroundColor = "olive";
                document.getElementById(row).style.color = "white";
            }else{
                document.getElementById(row).style.backgroundColor = "oldlace";
            }

            loop++;
            loopTime++;
        }
    }
}

function load(){
    var saved = JSON.parse(localStorage.getItem("eventList"));
    var loop = 0;
    var loopTime = 9;

    while(loopTime < 19){

        var val = saved[loop].event;
        var name = loopTime + "text";

        document.getElementById(name).value = val;

        loop++;
        loopTime++;
    }
}

function checkEvents(){
    var eventList = localStorage.getItem("eventList");
    /* if eventList is empty, set variable */
    if(!eventList){
        var block9={
            time:"9am",
            event:" "
        }
        var block10={
            time:"10am",
            event:" "
        }
        var block11={
            time:"11am",
            event:" "
        }
        var block12={
            time:"12pm",
            event:" "
        }
        var block13={
            time:"1pm",
            event:" "
        }
        var block14={
            time:"2pm",
            event:" "
        }
        var block15={
            time:"3pm",
            event:" "
        }
        var block16={
            time:"4pm",
            event:" "
        }
        var block17={
            time:"5pm",
            event:" "
        }
        var block18={
            time:"6pm",
            event:" "
        }
        var list = [];
        list.push(block9,block10,block11,block12,block13,block14,block15,block16,block17,block18);

        localStorage.setItem("eventList",JSON.stringify(list));
    }
}

document.getElementById("btn9").addEventListener("click",set9);
document.getElementById("btn10").addEventListener("click",set10);
document.getElementById("btn11").addEventListener("click",set11);
document.getElementById("btn12").addEventListener("click",set12);
document.getElementById("btn13").addEventListener("click",set13);
document.getElementById("btn14").addEventListener("click",set14);
document.getElementById("btn15").addEventListener("click",set15);
document.getElementById("btn16").addEventListener("click",set16);
document.getElementById("btn17").addEventListener("click",set17);
document.getElementById("btn18").addEventListener("click",set18);

var imageLoc;
function showGif(el, curr){
    localStorage.setItem("eventList",JSON.stringify(curr));
    /* addition of random taken from stackoverflow: 
    https://stackoverflow.com/questions/3191922/restart-an-animated-gif-from-javascript-without-reloading-the-image */ 
    imageLoc = "url('../assets/images/upload.gif?a="+Math.random()+"')";
    el.style.backgroundImage = imageLoc;
    setTimeout(function(){
        el.style.backgroundImage = "";
    }, 3500);
}
function set(num){
    var ele = document.getElementById("btn"+num);
    var toAdd = document.getElementById(num+"text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    var arrayPos = parseInt(num -9);
    current[arrayPos].event = toAdd;
    showGif(ele,current);
}

function set9(){
    var ele = document.getElementById("btn9");
    var toAdd = document.getElementById("9text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[0].event = toAdd;
    showGif(ele,current);
}
function set10(){
    var ele = document.getElementById("btn10");
    var toAdd = document.getElementById("10text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[1].event = toAdd;
    showGif(ele,current);
}
function set11(){
    var ele = document.getElementById("btn11");
    var toAdd = document.getElementById("11text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[2].event = toAdd;
    showGif(ele,current);
}
function set12(){
    var ele = document.getElementById("btn12");
    var toAdd = document.getElementById("12text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[3].event = toAdd;
    showGif(ele,current);
}
function set13(){
    var ele = document.getElementById("btn13");
    var toAdd = document.getElementById("13text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[4].event = toAdd;
    showGif(ele,current);
}
function set14(){
    var ele = document.getElementById("btn14");
    var toAdd = document.getElementById("14text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[5].event = toAdd;
    showGif(ele,current);
}
function set15(){
    var ele = document.getElementById("btn15");
    var toAdd = document.getElementById("15text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[6].event = toAdd;
    showGif(ele,current);
}
function set16(){
    var ele = document.getElementById("btn16");
    var toAdd = document.getElementById("16text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[7].event = toAdd;
    showGif(ele,current);
}
function set17(){
    var ele = document.getElementById("btn17");
    var toAdd = document.getElementById("17text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[8].event = toAdd;
    showGif(ele,current);
}
function set18(){
    var ele = document.getElementById("btn18");
    var toAdd = document.getElementById("18text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[9].event = toAdd;
    showGif(ele,current);
}