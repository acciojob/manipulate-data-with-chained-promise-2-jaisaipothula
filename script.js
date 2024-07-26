document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.getElementById('output');

    // Function to return a promise that resolves with an array of numbers after 3 seconds
    function getInitialArray() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]); // Resolves with the initial array
            }, 3000); // Resolves after 3 seconds
        });
    }

    // Function to filter out odd numbers and return a promise that resolves after 1 second
    function filterOddNumbers(array) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                resolve(evenNumbers);
            }, 1000); // Filter after 1 second
        });
    }

    // Function to multiply even numbers by 2 and return a promise that resolves after 2 seconds
    function multiplyEvenNumbers(array) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = array.map(num => num * 2);
                resolve(multiplied);
            }, 2000); // Multiply after 2 seconds
        });
    }

    // Execute the promises in sequence
    getInitialArray()
        .then(array => {
            // First update: Show even numbers
            return filterOddNumbers(array).then(filteredArray => {
                outputElement.textContent = `Even numbers: ${filteredArray.join(', ')}`;
                return multiplyEvenNumbers(filteredArray);
            });
        })
        .then(multipliedArray => {
            // Delay before updating the output again to ensure previous update is visible
            setTimeout(() => {
                outputElement.textContent = `Doubled even numbers: ${multipliedArray.join(', ')}`;
            }, 2000); // Ensure this delay is enough for the previous update
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
