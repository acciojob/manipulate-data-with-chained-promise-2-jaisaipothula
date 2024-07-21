document.addEventListener('DOMContentLoaded', () => {
  const outputElement = document.getElementById('output');

  // Function that returns a promise after 3 seconds with an array of numbers
  function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  // Function to filter out odd numbers and multiply even numbers by 2
  function processNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const multipliedNumbers = evenNumbers.map(num => num * 2);
    return multipliedNumbers;
  }

  // Initial loading message
  outputElement.textContent = 'Loading...';

  // Chain promises to manipulate the array
  getData()
    .then(numbers => {
      // Simulate async filtering after 1 second
      return new Promise(resolve => {
        setTimeout(() => {
          const result = processNumbers(numbers);
          resolve(result);
        }, 1000);
      });
    })
    .then(result => {
      // Simulate async updating after 2 seconds
      return new Promise(resolve => {
        setTimeout(() => {
          outputElement.textContent = result.join(', ');
          resolve();
        }, 2000);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      outputElement.textContent = 'Error occurred. Please try again.';
    });
});

