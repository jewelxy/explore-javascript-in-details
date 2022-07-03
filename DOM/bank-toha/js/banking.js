//Banking Transaction for deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    //Get deposit value
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.innerText;

    //Get deposit input value from input field
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;

    //Get balance amount
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValue = balanceAmount.innerText;

    //Add Deposit
    const addDeposit = parseFloat(depositAmountValue) + parseFloat(depositInputValue);
    depositAmount.innerText = addDeposit.toString();

    //Add New Balance
    const addNewBalance = parseFloat(depositInputValue) + parseFloat(balanceAmountValue);
    balanceAmount.innerText = addNewBalance.toString();

    //Clear input field
    depositInput.value = '';
});

// Banking Transaction for Withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    //Get withdraw amount
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountValue = withdrawAmount.innerText;

    //Get withdraw input value from input field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;

    //Get balance amount
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountValue = balanceAmount.innerText;

    //Total withdraw
    const totalWithdraw = parseFloat(withdrawAmountValue) + parseFloat(withdrawInputValue);
    withdrawAmount.innerText = totalWithdraw;

    //Add New Balance
    const addNewBalance = parseFloat(balanceAmountValue) - parseFloat(withdrawInputValue);
    balanceAmount.innerText = addNewBalance.toString();

    //Clear input field
    withdrawInput.value = '';
});

//Logout
document.getElementById('logout').addEventListener('click', function(){
    window.location.href = 'index.html';
});
