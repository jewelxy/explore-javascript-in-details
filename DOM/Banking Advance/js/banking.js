function getInputValue(inputId){
        //Get input value from input field
        const inputField = document.getElementById(inputId);
        const inputValue = inputField.value;
        const inputAmount = parseFloat(inputValue);
        //Clear input field
        inputField.value = '';
        return inputAmount;
}
function updateIndividualAmount(inputAmount,individualAmount){
    //Get amount value
    const amount = document.getElementById(individualAmount);
    const amountValue = amount.innerText;
    const amountNumber = parseFloat(amountValue);
    //Add amount
    const addAmount = amountNumber + inputAmount;
    amount.innerText = addAmount.toString();
}
function getCurrentBalance(){
    //Current total balance
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValue = balanceAmount.innerText;
    const balanceAmountNumber = parseFloat(balanceAmountValue);
    return balanceAmountNumber;
}
function updateTotalAmount(inputAmount,isAdd){
        //Get balance amount
        const balanceAmount = document.getElementById('balance-amount');
        const balanceAmountNumber = getCurrentBalance();
        //Add New Balance
        if(isAdd == true){
            const addNewBalance = balanceAmountNumber + inputAmount;
            balanceAmount.innerText = addNewBalance.toString();
        }else{
            const addNewBalance = balanceAmountNumber - inputAmount;
            balanceAmount.innerText = addNewBalance.toString();
        }
}
//Banking Transaction for deposit
document.getElementById('deposit-button').addEventListener('click', function(){
     const inputAmount = getInputValue('deposit-input');
     if(inputAmount>0){
        updateIndividualAmount(inputAmount,'deposit-amount');
        updateTotalAmount(inputAmount,true);
     }
});
// Banking Transaction for Withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    
    if(inputAmount > 0 && inputAmount < currentBalance){
        updateIndividualAmount(inputAmount,'withdraw-amount');
        updateTotalAmount(inputAmount,false);
    }
   
    else if(inputAmount > currentBalance){
        alert("You can't withdraw more than balance what you have !!! ");
    }
});
//Logout
document.getElementById('logout').addEventListener('click', function(){
    window.location.href = 'index.html';
});
