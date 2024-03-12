document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("link1").style.backgroundColor = "#2e2e2e";
    document.getElementById("link1").style.transform = "scale(1, 1.5)";
    // link 1
    document.getElementById("link1").addEventListener("click",function(event){
        document.getElementById("link1").style.backgroundColor = "#2e2e2e";
        document.getElementById("link1").style.transform = "scale(1, 1.5)";
        document.getElementById("link2").style.backgroundColor = "#555";
        document.getElementById("link2").style.transform = null;
        document.getElementById("link3").style.backgroundColor = "#555";
        document.getElementById("link3").style.transform = null;
        document.getElementById("link4").style.backgroundColor = "#555";
        document.getElementById("link4").style.transform = null;
    });
    // link 2
    document.getElementById("link2").addEventListener("click",function(event){
        document.getElementById("link2").style.backgroundColor = "#2e2e2e";
        document.getElementById("link2").style.transform = "scale(1, 1.5)";
        document.getElementById("link1").style.backgroundColor = "#555";
        document.getElementById("link1").style.transform = null;
        document.getElementById("link3").style.backgroundColor = "#555";
        document.getElementById("link3").style.transform = null;
        document.getElementById("link4").style.backgroundColor = "#555";
        document.getElementById("link4").style.transform = null;
    });
    // link 3
    document.getElementById("link3").addEventListener("click",function(event){
        document.getElementById("link3").style.backgroundColor = "#2e2e2e";
        document.getElementById("link3").style.transform = "scale(1, 1.5)";
        document.getElementById("link1").style.backgroundColor = "#555";
        document.getElementById("link1").style.transform = null;
        document.getElementById("link2").style.backgroundColor = "#555";
        document.getElementById("link2").style.transform = null;
        document.getElementById("link4").style.backgroundColor = "#555";
        document.getElementById("link4").style.transform = null;
    });
    // link 4
    document.getElementById("link4").addEventListener("click",function(event){
        document.getElementById("link4").style.backgroundColor = "#2e2e2e";
        document.getElementById("link4").style.transform = "scale(1, 1.5)";

        document.getElementById("link1").style.backgroundColor = "#555";
        document.getElementById("link1").style.transform = null;
        document.getElementById("link2").style.backgroundColor = "#555";
        document.getElementById("link2").style.transform = null;
        document.getElementById("link3").style.backgroundColor = "#555";
        document.getElementById("link3").style.transform = null;
    });
});

