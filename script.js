const myLibrary = [];

function Book(title, author, pages, read) {
// constructor function
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.info = function() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages, I have ${this.read} this book.`
return info};
}

// console.log(Book.info());
function addBookToLibrary(Book) {
	// append object to myLibrary array
myLibrary.push({title:Book.title, author:Book.author, pages:Book.pages, read:Book.read})
}

let deepWork = new Book('Deep Work', 'Cal Newport', '296', 'read');
let saltFAH = new Book('Salt, Fat, Acid, Heat', 'Samin Nosrat', '469','read');

addBookToLibrary(deepWork);
addBookToLibrary(saltFAH);

// Another solution
function generateTableHead(table, data) {
let thead = table.createTHead();
let row = thead.insertRow();
for (let key of data) {
	let th = document.createElement("th");
	let text = document.createTextNode(key);
	th.appendChild(text);
	row.appendChild(th);
	}
}

function generateTable(table, data) {
	for (let element of data) {
		let row = table.insertRow();
		for (key in element) {
		let cell = row.insertCell();
		let text = document.createTextNode(element[key]);
		cell.appendChild(text);}}}

// add <table> to HTML BEFORE
let table = document.querySelector("table");
let data = Object.keys(myLibrary[0]);

generateTable(table, myLibrary);
generateTableHead(table, data);

//---------------------------------

function buttonPush(event) {
  event.preventDefault();
}

function saveData() {
  let title = document.getElementById('title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  
  newBook = {title: title, author: author, pages: pages, read: read}
  addBookToLibrary(newBook)}

submitButton = document.querySelector('#save-data')
submitButton.addEventListener("click", buttonPush);
submitButton.addEventListener("click", saveData)

function deleteTable() {
  let table = document.querySelector('table')
  table.textContent = '';
}

function saveData() {
  let title = document.getElementById('title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  
  newBook = {title: title, author: author, pages: pages, read: read};
  addBookToLibrary(newBook);
  
  deleteTable();
  
  let table = document.querySelector("table");
  let data = Object.keys(myLibrary[0]);

  generateTable(table, myLibrary);
  generateTableHead(table, data);
}