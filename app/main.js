
var w = window;
var d = document;
function detectmob() {
    var width = w.innerWidth
        || d.documentElement.clientWidth
        || d.body.clientWidth;

    var height = w.innerHeight
        || d.documentElement.clientHeight
        || d.body.clientHeight;

    if(width <= 500) {
        console.log(width)
      return false;
    } else {
        console.log(width)
      return true;
    }
 }

function setData() {    
    var mob = detectmob();
    if(mob){
        d.getElementById("nameInsert").innerHTML = "Advait Ambeskar";
    }
    else{
    d.getElementById("nameInsert").innerHTML = "a.";
    }
}

setData();