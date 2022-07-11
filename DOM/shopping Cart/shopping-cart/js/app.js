//Case Increment and decrement button
function productUpdateNumber(product,isIncreasing,price){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //total calculate
    totalCalculate();
}
//Get input value for total calculation
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productInputNumber = parseFloat(productInput.value);
    return productInputNumber;
}
//Total calculation
function totalCalculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 200;
    const totalAmount = subTotal + tax;
    //Update on HTMl
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
}
//Phone
document.getElementById('phone-plus').addEventListener('click',function(){
    productUpdateNumber('phone',true,1219);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    productUpdateNumber('phone',false,1219);
});
//Case
document.getElementById('case-plus').addEventListener('click',function(){
    productUpdateNumber('case',true,59);
});
document.getElementById('case-minus').addEventListener('click',function(){
    productUpdateNumber('case',false,59);
});