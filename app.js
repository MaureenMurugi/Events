//Events and Event Listeners
// object.addEventListener(event, listener)

//Creating and Adding elements in the DOM

let newLi = document.createElement('li');
let firstSpan = document.createElement('span');
let secondSpan = document.createElement('span');

//Targeted the ul
let newBook = document.getElementById('book-list').getElementsByTagName('ul')[0];
//Appended the li
newBook.appendChild(newLi)
console.log(newBook)

//Targeted the li
let newCol = document.getElementById('book-list').getElementsByTagName('ul')[0].getElementsByTagName('li')[4];
//Added span1 text gave it the class
firstSpan.classList.add('name')
firstSpan.innerText = 'Javascript is Awesome';
//Appended the span
newCol.appendChild(firstSpan);
console.log(firstSpan)

secondSpan.classList.add('delete')
secondSpan.innerText = 'Delete';
newCol.appendChild(secondSpan);

console.log(secondSpan)
console.log(newCol)

