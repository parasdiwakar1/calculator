

let inputBox = document.getElementById('inputBox');

function clear_data() {
    inputBox.value = '';
}

function delete_data() {
    let currentValue = inputBox.value;
    inputBox.value = currentValue.substring(0, currentValue.length - 1);
}

function appendcharacter(character) {
    inputBox.value += character;
}

function calculate() {
    let calcu = inputBox.value;
    let result = eval(calcu);
    inputBox.value = result;
}








