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

