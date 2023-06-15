let incomes = [];
const table = document.getElementById('table-data-body');



function addIncome() {
    let description = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    console.log(typeof amount)
    if (isEmpty(amount) || isEmpty(description)){
        alert("La descripción y cantidad del ingreso no pueden estar vacias!!");
    }else {
        incomes.push({
            description: description,
            amount: parseFloat(amount).toFixed(2)
        });
        let row = document.getElementById('table-data-body').insertRow();
        let rowDescription = row.insertCell();
        let rowAmount = row.insertCell();
        rowDescription.innerHTML = description;
        rowAmount.innerHTML = amount;
        getTotal();
        clearValues();
    }

}
function clearValues() {
    document.getElementById('amount').value = 1;
    document.getElementById('description').value = '';
}
function getTotalIncomes() {
    return incomes.reduce((total, object) =>  +total + +object.amount, 0.0);
}

function getTotal(){
    let rowTotal = document.getElementById('total');
    rowTotal.innerHTML = '$ ' + getTotalIncomes();
}
function isEmpty(value) {
    return !value.trim().length;
}