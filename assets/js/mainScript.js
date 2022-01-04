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
        var nowTime = moment().format("H");
        // var nowTime = "14";
        // console.log(nowTime);
        while(loopTime < 19){

            var check = saved[loop].event;
            var name = loopTime + "text";
            var match = document.getElementById(name).value;
            // console.log(name);
            if(check == match){
                // console.log(check + " - " + name + " - match");
                document.getElementById(name).style.boxShadow = "none";
            }else{
                // console.log(check + " - " + name + " - no match");
                document.getElementById(name).style.boxShadow = "0px 0px 15px Red";

            }
            var row = "block"+loopTime;
            if(nowTime > loopTime){
                document.getElementById(row).style.backgroundColor = "green";
            }else if(nowTime == loopTime){
                document.getElementById(row).style.backgroundColor = "purple";
            }else{
                document.getElementById(row).style.backgroundColor = "white";
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

var imageLoc = "url('../images/upload.gif')";

function set9(){
    var toAdd = document.getElementById("9text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[0].event = toAdd;
    localStorage.setItem("eventList",JSON.stringify(current));
    document.getElementById("btn9").style.backgroundImage = "url('../assets/images/upload.gif')";
    setTimeout(function(){
        document.getElementById("btn9").style.backgroundImage = "";
    }, 3500);
}
function set10(){
    var toAdd = document.getElementById("10text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    current[1].event = toAdd;
    localStorage.setItem("eventList",JSON.stringify(current));
    document.getElementById("btn10").style.backgroundImage = "url('../assets/images/upload.gif')";
    setTimeout(function(){
        document.getElementById("btn10").style.backgroundImage = "";
    }, 3500);
}
function set11(){
    button3.innerHTML = "test";
}
function set12(){
    button4.innerHTML = "test";
}
function set13(){
    button4.innerHTML = "test";
}
function set14(){
    button4.innerHTML = "test";
}
function set15(){
    button4.innerHTML = "test";
}
function set16(){
    button4.innerHTML = "test";
}
function set17(){
    button4.innerHTML = "test";
}
function set18(){
    button4.innerHTML = "test";
}