function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        // console.log("Got pin 3 digit and calling", pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
            if(number == 'C'){
                calcInput.value = '';
            }

    }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('notify-success');
    const errorMsg = document.getElementById('notify-error');
    if(pin == typedNumbers){
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }else{
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}
