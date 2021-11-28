const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    //checks for second operand input
    Wait_Second_Operand: false,
    //holds operator
    operator: null,
};

function Input_Digit(digit) {

    const { Display_Value, Wait_Second_Operand } = Calculator;

    //Checks for second operand input, if true, replaces current display value to the new digit click.
    //In a strange way, sets the input function to the same one we started with, allowing for
    //new numbers to be added to the display value, otherwise the the second operand would continue
    //replacing the existing value.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}


function Input_Decimal(dot) {
    //if program is waiting for the first digit of the second operand, exits function.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //Grabs current display and converts it to a float
    const Value_of_Input = parseFloat(Display_Value);

    //if an operation and a second input have been entered, returns the updated operator
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    //converts the default '0' state of the calculator to a float
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;

    
    } else if (operator) {
        const Value_Now = First_Operand || 0;

        //performs the matching calculation from the dictionary, given the two inputs
        let result = Performm_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;  //allows us to replace the result with a new input
    Calculator.operator = Next_Operator;  
}

const Performm_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//simplifies button referencing
const keys = document.querySelector('.calculator-keys');

//listens for clicks, creates an event object via an anonymous function
keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }


    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    //The below If statement is not included on page 294 of the step academy's JS course
    //I could not figure out any means of using the equals sign without adding it
    if (target.classList.contains('equal-sign')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();

})

