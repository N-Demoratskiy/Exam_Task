// script.js

function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var operator = getOperator(phoneNumber);

    // Создание новой строки
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Заполнение ячеек
    cell1.innerHTML = phoneNumber;
    cell2.innerHTML = fullName;
    cell3.innerHTML = operator;
}

function getOperator(phoneNumber) {

    if (phoneNumber.startsWith("066")) {
        return "Водафон";
    }

    else if (phoneNumber.startsWith("067")) {
        return "Київстар";
    }
    else if (phoneNumber.startsWith("063")) {
        return "Лайфсел";
    }

    return "Інший оператор";
}