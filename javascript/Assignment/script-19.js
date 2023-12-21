function add() {
    var inp1 = parseFloat(document.getElementById('v1').value);
    var inp2 = parseFloat(document.getElementById('v2').value);
    var ans = document.getElementById('ans');
    if (isNaN(inp1) || isNaN(inp2)) {
        alert('Enter valid input values');
    } else {
        ans.value = inp1 + inp2;
    }
}

function sub() {
    var inp1 = parseFloat(document.getElementById('v1').value);
    var inp2 = parseFloat(document.getElementById('v2').value);
    var ans = document.getElementById('ans');
    if (isNaN(inp1) || isNaN(inp2)) {
        alert('Enter valid input values');
    } else {
        ans.value = inp1 - inp2;
    }
}

function mult() {
    var inp1 = parseFloat(document.getElementById('v1').value);
    var inp2 = parseFloat(document.getElementById('v2').value);
    var ans = document.getElementById('ans');
    if (isNaN(inp1) || isNaN(inp2)) {
        alert('Enter valid input values');
    } else {
        ans.value = inp1 * inp2;
    }
}

function divi() {
    var inp1 = parseFloat(document.getElementById('v1').value);
    var inp2 = parseFloat(document.getElementById('v2').value);
    var ans = document.getElementById('ans');
    if (isNaN(inp1) || isNaN(inp2)) {
        alert('Enter valid input values');
    } else if (inp2 === 0) {
        alert('Division by zero is not allowed');
    } else {
        ans.value = inp1 / inp2;
    }
}

function percent() {
    var inp1 = parseFloat(document.getElementById('v1').value);
    var inp2 = parseFloat(document.getElementById('v2').value);
    var ans = document.getElementById('ans');
    if (isNaN(inp1) || isNaN(inp2)) {
        alert('Enter valid input values');
    } else {
        ans.value = (inp1 % inp2);
    }
}
