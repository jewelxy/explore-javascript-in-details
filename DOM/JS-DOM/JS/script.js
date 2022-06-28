//Change inner text by tag name
const blogTitles = document.getElementsByTagName('h3');
for(const h3 of blogTitles){
    console.log(h3.innerText);
}

//change style and element by id
const secondTitleStyle = document.getElementById('secondTitle');
secondTitleStyle.innerText="Title updated by JS";

const titleStyle = secondTitleStyle.style;
titleStyle.backgroundColor="green";
titleStyle.color="red";
titleStyle.textAlign="center";

//change style by class name

const blogs = document.getElementsByClassName('blog');
for(blog of blogs){
    blog.style.border = '2px solid orange';
    blog.style.margin = '10px';
    blog.style.padding = '20px';
    blog.style.borderRadius = '10px';
}
