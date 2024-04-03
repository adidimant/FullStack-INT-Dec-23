const myFunction = () => {
    console.log('I am scrolling');
};

// list of js dom events: https://www.w3schools.com/jsref/dom_obj_event.asp

// declaring in html events:
// <div onscroll="myFunction()"> // here what is passed in the "..." is the javascript code that will be executed when the event happens

// declaring in js:
const div1 = document.querySelector('div');
div1.onscroll = myFunction; // note - we are not calling the function here since we don't want to call it immediately - only when onscroll event happens

document.onload = () => {
  console.log('page is loaded!');
};

document.getElementById('myInput').onfocus = () => {
  console.log('input was focused!');
};


document.addEventListener('mousemove', (event) => {
  console.log(event);
});

document.addEventListener('click', (event) => {
  console.log("event clicked in: (" + event.clientX + ", " + event.clientY + ") ");
});
