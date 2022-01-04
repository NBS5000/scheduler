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

        while(loopTime < 19){

            var check = saved[loop].event;
            var name = loopTime + "text";
            var match = document.getElementById(name).value;
            // console.log(name);
            if(check == match){
                console.log(check + " - " + name + " - match");
                document.getElementById(name).style.borderColor = "Black";
            }else{
                console.log(check + " - " + name + " - no match");
                document.getElementById(name).style.borderColor = "Red";
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
            event:"test"
        }
        var block10={
            time:"10am",
            event:""
        }
        var block11={
            time:"11am",
            event:""
        }
        var block12={
            time:"12pm",
            event:"blue"
        }
        var block13={
            time:"1pm",
            event:""
        }
        var block14={
            time:"2pm",
            event:""
        }
        var block15={
            time:"3pm",
            event:""
        }
        var block16={
            time:"4pm",
            event:""
        }
        var block17={
            time:"5pm",
            event:""
        }
        var block18={
            time:"6pm",
            event:""
        }
        var list = [];
        list.push(block9,block10,block11,block12,block13,block14,block15,block16,block17,block18);

        localStorage.setItem("eventList",JSON.stringify(list));
    }
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

button1.addEventListener("click",test1);
button2.addEventListener("click",test2);
button3.addEventListener("click",test3);
button4.addEventListener("click",test4);

function test1(){
    button1.innerHTML = "test";

    var toAdd = document.getElementById("9text").value;
    var current = JSON.parse(localStorage.getItem("eventList"));
    console.log(toAdd);
    console.log(current);
    current[0].event = toAdd;
    console.log(current);
    localStorage.setItem("eventList",JSON.stringify(current));

}
function test2(){
    button2.innerHTML = "test";
}
function test3(){
    button3.innerHTML = "test";
}
function test4(){
    button4.innerHTML = "test";
}