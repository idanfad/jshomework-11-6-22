function calc() {
    let num1 = prompt('אנא הזן מספר ראשון');
    let num2 = prompt('אנא הזן מספר שני');

    if (num1 % num2 == 1) {
        alert('יש שארית');
    } else if (num1 % num2 == 0) {
        alert('אין שארית');
    }

}