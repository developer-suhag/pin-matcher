function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('pin-output').value = pin;
};

// key-pad

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            typedNumber.value = '';
        }
    } else {
        const prviousNumber = typedNumber.value;
        const currentNumber = prviousNumber + number;
        typedNumber.value = currentNumber;
    }

})