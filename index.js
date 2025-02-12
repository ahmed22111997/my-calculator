// Select the display element
const display = document.getElementById("display");

// Function to append numbers/operators to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression safely
    } catch (error) {
        display.value = "Error"; // Display "Error" if invalid expression
    }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
