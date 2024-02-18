function OpenOrClose(articleId){
    var element = document.getElementById(articleId);
    if(element.classList.contains('articleOpen')){
        element.classList.toggle('articleClose');
        element.classList.remove('articleOpen')
    }
    else{
        element.classList.toggle('articleOpen');
        element.classList.remove('articleClose');
    }
}

//var hasScrolled40Percent = false;
window.addEventListener('scroll', function() {
    // Get the height of the window
    var windowHeight = window.innerHeight || this.window.pageYOffset || document.documentElement.scrollTop;
    // Get the current scroll position
    var scrollPosition = window.scrollY;
    // Calculate the percentage scrolled
    var scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - windowHeight)) * 100;
    // Check if the user has scrolled 40% down the page
    if (scrollPercentage >= 40) {
        if(document.getElementById('article1').classList.contains('articleClose') && 
        document.getElementById('article2').classList.contains('articleClose') &&
        document.getElementById('article3').classList.contains('articleClose')){
            return;
        }else{
            document.getElementById('control-window').classList.add('control-window-show');
            document.body.classList.add('freeze-scrolling');
        }
    }
});

function controlWindowHide(){
    document.getElementById('control-window').classList.remove('control-window-show');
    document.body.classList.remove('freeze-scrolling');
    scroll(0,0);
    if(document.getElementById('article1').classList.contains('articleOpen')){
        document.getElementById('article1').classList.remove('articleOpen');
        document.getElementById('article1').classList.toggle('articleClose');
    }
    if(document.getElementById('article2').classList.contains('articleOpen')){
        document.getElementById('article2').classList.remove('articleOpen');
        document.getElementById('article2').classList.toggle('articleClose');
    }
    if(document.getElementById('article3').classList.contains('articleOpen')){
        document.getElementById('article3').classList.remove('articleOpen');
        document.getElementById('article3').classList.toggle('articleClose');
    }
}