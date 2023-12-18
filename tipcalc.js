
document.getElementById("decrement").addEventListener('click', function(){
    document.getElementById("x").stepDown(1);
});
document.getElementById("increment").addEventListener('click',function(){
    document.getElementById("x").stepUp(1);
});



// document.getElementById("calculate").addEventListener('click', calculat());



function calculat(){
    const BillTotal = Number(document.getElementById("Bill").value);
    const PercentTip = Number(document.getElementById("tip").value);
    let totalPerson = Number(document.getElementById("x").value);
    const totalTip = PercentTip/100;
    const tip = BillTotal*totalTip;
    let totalPerPerson = Number(BillTotal + tip)/totalPerson;
    console.log(totalPerPerson);
    document.getElementById('amount').textContent = `Total per person: $${totalPerPerson.toFixed(2)}`;

}
