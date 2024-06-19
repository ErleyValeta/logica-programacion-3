function calculateFactorial() {
    const numberInput = document.getElementById('numberInput');
    const resultInput = document.getElementById('resultInput');
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        resultInput.value = 'Ingrese un número válido';
        return;
    }

    resultInput.value = factorial(number);
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

