/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1. 
let pTag = document.querySelectorAll("p")
console.log(pTag);

let firstDiv = document.querySelector(".site-header")
console.log(firstDiv);

let elementWithId  = document.querySelector("#jumbotronText")
console.log(elementWithId);

let allP = document.querySelectorAll(".primary-content p")
console.log(allP);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn") 

alertButton.addEventListener("click", () => {
alert ("Thanks for visiting Bikes for Refugees!");
})
console.log("lallala");

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeColor = document.querySelector("#bgrChangeBtn") ;

changeColor.addEventListener("click", ()=> {
  let bodyTag = document.querySelector("body");//body tag???
  bodyTag.style.backgroundColor = "red";
})

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

let largerLink = document.querySelector("#largerLinksBtn");

largerLink.addEventListener("click"), () =>{
  let aTag = document.querySelector("a");
  aTag.style.fontSize = "10px";
}


/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
let addSomeText = document.querySelector("#addArticleBtn");
addSomeText.addEventListener("click", () => {
  let newP = document.createElement("p");
  newP.innerText = "lallala";
  let addArticle = document.querySelector("#addArticle");
  addArtickle.appendChild(newP);

})