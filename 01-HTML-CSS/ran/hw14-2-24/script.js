window.addEventListener('scroll', function() {
    const takeoverWindow = document.getElementById('takeoverWindow');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 40) {
        takeoverWindow.classList.add('show');
    } else {
        takeoverWindow.classList.remove('show');
    }
});
