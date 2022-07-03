//Hide element
document.getElementById('delete-btn').addEventListener('click', function () {
    document.getElementById('hide-element').style.display = 'none';
});


//Hide element by input field confirmation
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const deleteBtn =  document.getElementById('delete-btn');
    const deleteText = document.getElementById('hide-element').innerText;
    if(event.target.value == deleteText){
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled', true);
    }
});

//Remove input field
document.getElementById('delete-btn').addEventListener('click', function () {
    const removeInputBox = document.getElementById('delete-confirm');
    removeInputBox.value = '';
});


//===============Comment=============
// document.getElementById('delete-btn').addEventListener('click', function () {
//     document.getElementById('secret-info').style.display = 'none';
// });
// //focus
// document.getElementById('delete-confirm').addEventListener('focus', function () {
//     document.body.style.backgroundColor = 'lightcoral';
// });
// //blur
// document.getElementById('delete-confirm').addEventListener('blur', function () {
//     document.body.style.backgroundColor = 'white';
// });
// //keydown
// // document.getElementById('delete-confirm').addEventListener('keydown', function () {
// //     const deleteField = document.getElementById('delete-confirm');
// //     console.log(deleteField.value);
// // });
// //keypress
// // document.getElementById('delete-confirm').addEventListener('keypress', function () {
// //     const deleteField = document.getElementById('delete-confirm');
// //     console.log(deleteField.value);
// // });
// //keyup
// document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
//     const deleteBtn = document.getElementById('delete-btn');
//     if (event.target.value == 'delete') {
//         deleteBtn.removeAttribute('disabled');
//     }
//     else {
//         deleteBtn.setAttribute('disabled', true);
//     }
// });
// //change
// document.getElementById('delete-confirm').addEventListener('change', function () {
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);
// });

// Extra:
// better way to remove 

/* function toggleDeleteButton (event){
    const deleteBtn = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
}
document.getElementById('delete-confirm').addEventListener('keyup', toggleDeleteButton);
addEventListener('change', toggleDeleteButton);
 */