const blogsP = document.getElementsByClassName('blogs');

for(blog of blogsP){
    blog.style.border = "2px solid tomato";
    blog.style.borderRadius = "10px";
    blog.style.margin = "5px";
    blog.style.padding = "10px";
}

// const titles = document.querySelectorAll('.blogsTitle');
// titles.innerText = "This is my awesome blog";
// const makeUp = titles.style;
// makeUp.backgroundColor = "green";
// makeUp.marginLeft = "430px";
// makeUp.marginRight = "430px";
// makeUp.textAlign = "center";
// makeUp.padding = "10px";

const titles = document.getElementsByClassName('blogsTitle');

for( title of titles){
title.innerText = "This is my awesome blog";
title.style.backgroundColor = "purple";
title.style.color = "#fff";
title.style.marginLeft = "490px";
title.style.marginRight = "490px";
title.style.textAlign = "center";
title.style.padding = "10px";
}