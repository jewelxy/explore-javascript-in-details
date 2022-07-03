// Add event listener
document.getElementById('postComment').addEventListener('click',function(){
    //Get comment from user
    const commentBox = document.getElementById('comment-box');
    //Create : where to show comment
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    //Add creating comment into comment area
    const commentArea = document.getElementById('comment-area');
    commentArea.appendChild(newComment);
    //Become blank the comment box after create comment
    commentBox.value = '';
});