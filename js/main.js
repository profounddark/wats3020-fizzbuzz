// getPositiveInteger prompts the user for a positive integer.
// It returns the positive integer entered.
function getPositiveInteger()
{
    let isInteger = false, outputNumber = 0;
    while (!isInteger)
    {
        outputNumber = Number(prompt('Please enter a positive integer:', 25));
        isInteger = (Number.isSafeInteger(outputNumber) && (outputNumber>0));
        console.log(outputNumber, isInteger);
    }
    return outputNumber;
}

// calculateFizzBuzz returns an array of strings representing the outcome of the FizzBuzz
function calculateFizzBuzz(upperLimit)
{
    let outputArray = [];

    for (let count = 1; count < maxNumber+1; count++)
    {
        // note to self: only one statement at max executes
        if ((count % 15) == 0)
        {
            outputArray.push('FizzBuzz');
        }
        else if ((count % 5) == 0)
        {
            outputArray.push('Buzz');
        }
        else if ((count % 3) == 0)
        {
            outputArray.push('Fizz');
        }
        else
        {
            outputArray.push(count.toString());
        }
        
    }
    return outputArray;
}

/* Code for WATS 3020 FizzBuzz Assignment */

let maxNumber,
    fbResults,
    fbText;

// Get the maximum number for the FizzBuzz
maxNumber = getPositiveInteger();
fbResults = calculateFizzBuzz(maxNumber);
// the assignment called for a for loop to do this. Join with a newline character seemed to achieve the same result.
fbText = fbResults.join('\n');


///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
