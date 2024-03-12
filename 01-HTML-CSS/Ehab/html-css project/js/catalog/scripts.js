function handleClick(button) {
    // Traverse up to the parent div of the button
    var parentDiv = button.parentNode;
    // Find the img and h2 elements within the parent div
    var imgSrc = parentDiv.querySelector('img').src;
    var h2Value = parentDiv.querySelector('h2').innerText;
    alert(imgSrc + ' | ' + h2Value);
}

