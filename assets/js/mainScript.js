/*
Homework wk5
scheduler
-Steve Barry-
javascript file
*/


function elapse(){
    setInterval(timeInterval, 1000);

    function timeInterval(){
        document.getElementById("currentDay").innerHTML = moment().format("dddd, Do MMMM YYYY, h:mm:ss a");
    }

}
