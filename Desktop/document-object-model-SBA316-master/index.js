//Navigation bar---------------
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "/catalog",
  },
  {
    text: "orders",
    href: "/orders",
  },
  {
    text: "account",
    href: "/account",
  },

];


//giving menu elements height and background-color
const topMenuEl = document.getElementById("navbar");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "orange";
topMenuEl.classList.add("flex-around");

const topMenuLinks = [];
//creating anchor link
for (let i = 0; i < menuLinks.length; i++) {
  const anchorLink = document.createElement("a");
  //topMenuLinks.push(anchorLink);
  anchorLink.href = menuLinks[i].href;
  anchorLink.textContent = menuLinks[i].text;
  topMenuEl.appendChild(anchorLink);
}
console.log(topMenuEl);

//each click activate the menu item (.addEventListener)
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  this.querySelectorAll("a").forEach((anchor) => {
    if (event.target !== anchor) {
      anchor.classList.remove("active");
    }
  });
  if (event.target.tagName !== "A") return;
  if (event.target.classList.value.includes("active")) {
    event.target.classList.remove("active");
    showSubLinks(event)
  } else {
    event.target.classList.add("active");
    showSubLinks(event)
  }
});
console.log(topMenuLinks);

//checking if the current event = the menu text and if it is active
/* function showSubLinks (event){
  for (let i =0; i<menuLinks.length; i++){
    console.log(event.target.textContent)
    console.log(menuLinks[i].text)
    console.log(event.target.classList.contains('active'))
    if(menuLinks[i].text === event.target.textContent && event.target.classList.contains('active')){
      subMenuEl.style.top = '100'
    }else{
      subMenuEl.style.top = '0'
    
}}
} */

// create header
let divHeader = document.createElement("div")
divHeader.innerHTML = "<h1>Customer form</h1>";
divHeader.style.backgroundColor = "white"

divHeader.style.color ='black'
divHeader.style.textAlign = 'center'
divHeader.classList.add("flex-wrap");
document.getElementById("text-el").appendChild(divHeader);

// Caching DOM Elements
//colecting UL, additional coments input, Add Coments Button
const comentsList = document.getElementById("commentList"); // ul
const comentsInput = document.getElementById("commentInput"); // additional commens
const comentsBtn = document.getElementById("addCommentBtn"); // Add Comment button
comentsBtn.type='button'
//seting font color for comments list and input
comentsList.style.color='black'
comentsInput.style.color ='black'
const newLi = document.createElement("li");
function addComment() {
  
  // access and store the text from the input
  const text = comentsInput.value;
  // create a new coment list
  newLi.textContent = text;

 //add new Li child element to the UL
  comentsList.appendChild(newLi);
  comentsInput.value = "";
  comentsInput.focus();
}
// register event listener to the button
//comentsBtn.addEventListener("click", addComment);
//console.log(addComment());
comentsBtn.addEventListener('click', (event) => {
  addComment()
  event.preventDefault();
  //customForm.reset();
})
//add background color to the form
const customForm = document.getElementById("customerForm")
customForm.style.backgroundColor='bisque'
customForm.style.color='black'

//create additional submit button and set background color
const submit = document.createElement("button")
submit.type = 'submit';
submit.value = 'submit';
submit.textContent = 'Submit'
submit.style.backgroundColor= 'var(--sub-menu-bg)'
customForm.appendChild(submit)



// Addded Background image
const divImage= document.getElementById("container");
divImage.style.backgroundImage = 'url(holiday.jpeg)';
/* divImage.style.height="100%";
divImage.style.width="100%"; */


//message confirmation that form is submited
const submitText = document.createTextNode("The form has been submitted")

//adding two events to the same button
 submit.addEventListener('submit', handler, false);
 submit.addEventListener('click', handler, false);

function handler(event) {
  alert('The form has been submitted');
  newLi.textContent = ''
  event.preventDefault();
  customForm.reset();
}
