/**
 * In general - document.querySelector is "talking css"
 */

document.querySelector('div') // gets the first div in the document
document.querySelector('p') // gets the first p in the document
document.querySelector('.lorena-class') // gets the first element with the class 'lorena-class'
document.querySelector('#foo') // gets the first element with the id='foo'
document.querySelector('#foo\\:bar') // gets the element with the id="foo:bar" (the \\ tells that what is after is a special character in css)
document.querySelector('#foo\\\\bar') // gets the element with the id="foo\bar" (in css - need \\ for 1 \)

document.querySelectorAll('div') // gets all the divs in the document
document.getElementsByTagName('div') // gets all the divs in the document
document.querySelectorAll('div')[2] // gets all the divs then chose the 3rd div from the list
document.getElementsByTagName('div')[2] // gets all the divs then chose the 3rd div from the list

const container = document.querySelector("#test"); // gets the element with the id="test" 
const matches = container.querySelectorAll("div.highlighted > p"); // get a list of <p> elements whose immediate parent element is a <div> with the class highlighted and which are located inside a container whose ID is test.
const matches2 = container.querySelectorAll("div.highlighted.some-class .some-class2 p"); // get a list of <p> elements whose inside an element with the class 'some-class2' which is an eement inside a div that its class is highlighted & some-class ,and which are located inside a container whose ID is test.

//Here, an attribute selector is used to return a list of the list items contained within a list whose ID is userlist which have a data-active attribute whose value is 1:
const container2 = document.querySelector("#userlist");
const matches3 = container2.querySelectorAll("li[data-active='1']");

const matches4 = container2.querySelectorAll("a[href]"); // give me all the a elements that has hef attribute

a.forEach((num) => {
  console.log(num+1);
});

const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
    console.log('div at index: ' + index, div.id);
});