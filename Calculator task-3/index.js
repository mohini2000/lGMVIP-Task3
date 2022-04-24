let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
screen.value = '';
const calcu = {
    myfunction: function() {
        alert("Please enter the value");
    }
}
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            if (screen.value == '') {
                window.alert("Enter the value")
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        } else if (buttonText == '-') {
            if (screen.value == '') {
                window.alert("Enter the value")
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        } else if (buttonText == '+') {
            if (screen.value == '') {
                window.alert("Enter the value")
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        } else if (buttonText == '/') {
            if (screen.value == '') {
                window.alert("Enter the value")
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        } else if (buttonText == '%') {
            if (screen.value == '') {
                window.alert("Enter the value")
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
            }
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            if (screen.value == '') {
                window.alert('Enter the value')
            } else {
                screen.value = eval(screen.value)
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}