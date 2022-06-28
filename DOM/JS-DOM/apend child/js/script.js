//Where to add (Parent Node)
const myList = document.getElementById('myList');

//Create element (Child node <li>list-5</li>)
let newListItem = document.createElement('li');
newListItem.textContent = 'list-5';

//Append new element
myList.appendChild(newListItem);

//==========================================

//Create multiple element on HTML by JS

//Create parent node
const article = document.createElement('article');

//create child note and input inner content
const h3 = document.createElement('h3');
h3.innerText = 'This awesome blog created by JS';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ducimus';

//Move multiple element on parents node
article.appendChild(h3);
article.appendChild(p);

//Move parent node on choose section
const blog = document.getElementById('blogs');
blog.appendChild(article);

//Add class on article for style
article.classList.add('blogArticle');

//Style
const blogStyle = document.getElementsByClassName('blogArticle');

for (const blogMakeup of blogStyle) {
    blogMakeup.style.border = '1px solid tomato';
    blogMakeup.style.padding = '20px';
    blogMakeup.style.margin = '10px';
    blogMakeup.style.borderRadius = '10px';
}