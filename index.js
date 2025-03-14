// Write your code here!
// Create a div
const div = document.createElement('div');

// Set the inner text to match the test
div.textContent = 'YOUR-NAME is the champion';

// Append the div to the body
document.body.appendChild(div);

// Select the <main> element by its ID and remove it
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';  
document.body.appendChild(newHeader);

