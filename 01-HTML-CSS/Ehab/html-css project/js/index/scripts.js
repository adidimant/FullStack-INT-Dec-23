document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("link1").style.color = "#e7a328";
    document.getElementById("link1").style.textDecoration = "underline";
    // link 1: user click on home link
    document.getElementById("link1").addEventListener("click",function(event){
        document.getElementById("link1").style.color = "#e7a328";
        document.getElementById("link1").style.textDecoration = "underline";
        document.getElementById("link2").style.color = "#000";
        document.getElementById("link2").style.textDecoration = "none";
        document.getElementById("link3").style.color = "#000";
        document.getElementById("link3").style.textDecoration = "none";
        document.getElementById("link4").style.color = "#000";
        document.getElementById("link4").style.textDecoration = "none";
    });
    // link 2: user click on catalog link
    document.getElementById("link2").addEventListener("click",function(event){
        document.getElementById("link2").style.color = "#e7a328";
        document.getElementById("link2").style.textDecoration = "underline";
        document.getElementById("link1").style.color = "#000";
        document.getElementById("link1").style.textDecoration = "none";
        document.getElementById("link3").style.color = "#000";
        document.getElementById("link3").style.textDecoration = "none";
        document.getElementById("link4").style.color = "#000";
        document.getElementById("link4").style.textDecoration = "none";
    });
    // link 3: user click on reservation link
    document.getElementById("link3").addEventListener("click",function(event){
        document.getElementById("link3").style.color = "#e7a328";
        document.getElementById("link3").style.textDecoration = "underline";
        document.getElementById("link1").style.color = "#000";
        document.getElementById("link1").style.textDecoration = "none";
        document.getElementById("link2").style.color = "#000";
        document.getElementById("link2").style.textDecoration = "none";
        document.getElementById("link4").style.color = "#000";
        document.getElementById("link4").style.textDecoration = "none";
    });
    // link 4: user click on about link
    document.getElementById("link4").addEventListener("click",function(event){
        document.getElementById("link4").style.color = "#e7a328";
        document.getElementById("link4").style.textDecoration = "underline";
        document.getElementById("link1").style.color = "#000";
        document.getElementById("link1").style.textDecoration = "none";
        document.getElementById("link2").style.color = "#000";
        document.getElementById("link2").style.textDecoration = "none";
        document.getElementById("link3").style.color = "#000";
        document.getElementById("link3").style.textDecoration = "none";
    });
});

