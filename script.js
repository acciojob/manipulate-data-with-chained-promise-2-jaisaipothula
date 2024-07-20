// Function to return a promise that resolves with an array after 3 seconds
function generateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers from the array
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function to multiply even numbers by 2 in the array
function multiplyEvenNumbers(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

// Function to update the HTML output
function updateOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
}

// Main function to chain promises
function processArray() {
    generateArray()
        .then(array => {
            // Print initial array
            updateOutput(`Array after 3 seconds: [${array.join(', ')}]`);
            return array;
        })
        .then(filterOddNumbers)
        .then(filteredArray => {
            // Print filtered array after 1 second
            setTimeout(() => {
                updateOutput(`Filtered Array: [${filteredArray.join(', ')}]`);
            }, 1000);
            return filteredArray;
        })
        .then(multiplyEvenNumbers)
        .then(finalArray => {
            // Print final array after 2 seconds
            setTimeout(() => {
                updateOutput(`Final Array: [${finalArray.join(', ')}]`);
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
            updateOutput('An error occurred. Please try again.');
        });
}

// Call the main function on page load
document.addEventListener('DOMContentLoaded', function() {
    processArray();
});
