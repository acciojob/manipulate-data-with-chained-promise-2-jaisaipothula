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

  // Chain promises to manipulate the array
  getData()
    .then(numbers => {
      // Filter out odd numbers after 1 second
      return new Promise(resolve => {
        setTimeout(() => {
          const evenNumbers = numbers.filter(num => num % 2 === 0);
          outputElement.textContent = evenNumbers.join(', ');
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then(evenNumbers => {
      // Multiply even numbers by 2 after another 2 seconds
      return new Promise(resolve => {
        setTimeout(() => {
          const multipliedNumbers = evenNumbers.map(num => num * 2);
          outputElement.textContent = multipliedNumbers.join(', ');
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      outputElement.textContent = 'Error occurred. Please try again.';
    });
});
