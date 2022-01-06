/*
Homework wk5
scheduler
-Steve Barry-
javascript file
*/

function open(){
    /* when page first loads, run checkEvents to see if there is an object in localStorage for this page,
    after that, load the events, then set the elapse to update time and display as needed*/
    checkEvents();
    load();
    elapse();
}

function elapse(){
    /* code runs every second, updates time and checks if values of events are different than what is saved
    change display of box to highlight if there is a difference, adjust colours and accessibility depending 
    on time: olive for current hour, grey and disabled for past, 'oldlace' for future*/
    setInterval(timeInterval, 250);
    function timeInterval(){
        document.getElementById("currentDay").innerHTML = moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
        var saved = JSON.parse(localStorage.getItem("eventList"));
        var loop = 0;
        var loopTime = 9;
        var nowTime = moment().format("H");
        /* setting fixed time for testing */
        // var nowTime = "8";
        while(loopTime < 19){

            var check = saved[loop].event;
            var name = "text" + loopTime;
            var btnUp = "btn"+loopTime;
            var match = document.getElementById(name).value;
            if(check == match){
                document.getElementById(name).style.boxShadow = "none";
            }else{
                document.getElementById(name).style.boxShadow = "0px 0px 15px Red";
                document.getElementById(btnUp).style.visibility = "visible";

            }
            var row = "block"+loopTime;
            var tArea = "text"+loopTime;
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
    /* when page is loaded, set events on page */
    var saved = JSON.parse(localStorage.getItem("eventList"));
    var loop = 0;
    var loopTime = 9;

    while(loopTime < 19){

        var val = saved[loop].event;
        var name = "text"+loopTime ;

        document.getElementById(name).value = val;

        loop++;
        loopTime++;
    }
}

function checkEvents(){
    var eventList = localStorage.getItem("eventList");
    /* if eventList is empty, set event items and times */
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
/* bind added using info taken from stackoverflow:
https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function*/
document.getElementById("btn9").addEventListener("click",set.bind(null,9));
document.getElementById("btn10").addEventListener("click",set.bind(null,10));
document.getElementById("btn11").addEventListener("click",set.bind(null,11));
document.getElementById("btn12").addEventListener("click",set.bind(null,12));
document.getElementById("btn13").addEventListener("click",set.bind(null,13));
document.getElementById("btn14").addEventListener("click",set.bind(null,14));
document.getElementById("btn15").addEventListener("click",set.bind(null,15));
document.getElementById("btn16").addEventListener("click",set.bind(null,16));
document.getElementById("btn17").addEventListener("click",set.bind(null,17));
document.getElementById("btn18").addEventListener("click",set.bind(null,18));


var imageLoc, num;
function showGif(el, curr){
    localStorage.setItem("eventList",JSON.stringify(curr));
    /* addition of random taken from stackoverflow: 
    https://stackoverflow.com/questions/3191922/restart-an-animated-gif-from-javascript-without-reloading-the-image */ 
    if(location.hostname === "localhost" || location.hostname === "127.0.0.1"){
        imageLoc = "url('../assets/images/upload.gif?a="+Math.random()+"?raw=true')";
    }else{
        imageLoc = "url('../scheduler/assets/images/upload.gif?a="+Math.random()+"?raw=true')";
    }
    el.style.backgroundImage = imageLoc;
    setTimeout(function(){
        el.style.backgroundImage = "";
        el.style.visibility = "hidden";
    }, 3500);
}

/* functions for setting events reduced from 10 to 1 */
function set(num){
    var ele = document.getElementById("btn"+num);
    var toAdd = document.getElementById("text"+num).value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    var arrayPos = parseInt(num -9);
    current[arrayPos].event = toAdd;
    showGif(ele,current);
}