//Using function

function handleOnClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = "Just using function";
}

//Direct function
document.getElementById('handle-event').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = "Just Direct function";
});

//Direct with input field
document.getElementById('update-text').addEventListener('click', function () {
    //Where show
    const p = document.getElementById('clicking-method');

    //How to show
    const inputField = document.getElementById('name-field');
    p.innerText = inputField.value;

    //How to become empty after update input field
    inputField.value = '';
});