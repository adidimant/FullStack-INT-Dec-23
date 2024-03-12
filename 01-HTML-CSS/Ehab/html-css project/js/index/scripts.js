document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("link1").style.color = "#e7a328";
    document.getElementById("link1").style.textDecoration = "underline";
    // link 1
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
    // link 2
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
    // link 3
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
    // link 4
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

