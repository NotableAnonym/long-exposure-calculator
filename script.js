document.onclick = function () {
    "use strict";
    
    var shutterspeed = document.getElementById("shutterspeed").value;
    
    if (shutterspeed !== "") {
    
        if (shutterspeed.indexOf("/") > -1) {
            var shutterspeed = shutterspeed.split("/");
            var shutterspeed = Number(shutterspeed[0]) / Number(shutterspeed[1]);
        }
        
        var stops = Math.pow(2, Number(document.getElementById("stops").value));
    
        var calc = (Number(shutterspeed) * stops).toFixed(2);
        var result = calc.toString();
    
        document.getElementById("result").innerHTML = result;
    }
};

function toggleNightMode() {
    if (document.getElementById("nightMode").checked == true) {
        
        document.body.style.backgroundColor = "black";
        document.getElementById("shutterspeed").style.backgroundColor = "black";
        document.getElementById("stops").style.backgroundColor = "black";
        
        document.body.style.color = "red";
        document.body.style.fontWeight = "bold";
        document.getElementById("shutterspeed").style.color = "red";
        document.getElementById("stops").style.color = "red";
        document.getElementById("result").style.color = "red";
        document.getElementById("secs").style.color = "red";
        
    } else if (document.getElementById("nightMode").checked == false) {
        
        document.body.style.backgroundColor = "#E2E2E2";
        document.getElementById("shutterspeed").style.backgroundColor = "#E2E2E2";
        document.getElementById("stops").style.backgroundColor = "#E2E2E2";
        
        document.body.style.color = "#4E4E4E";
        document.body.style.fontWeight = "initial";
        document.getElementById("shutterspeed").style.color = "#4E4E4E";
        document.getElementById("stops").style.color = "#4E4E4E";
        document.getElementById("result").style.color = "#3169D3";
        document.getElementById("secs").style.color = "#3169D3";
    }
}