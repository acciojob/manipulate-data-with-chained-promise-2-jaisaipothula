<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promise Chaining Example</title>
</head>
<body>
    <div id="output">Loading...</div>

    <script>
        function processArray() {
            // Create a promise that resolves with an array of numbers after 3 seconds
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        function filterEvens(arr) {
            // Filter out odd numbers
            return arr.filter(num => num % 2 === 0);
        }

        function multiplyByTwo(arr) {
            // Multiply even numbers by 2
            return arr.map(num => num * 2);
        }

        // Start processing the array
        processArray()
            .then((arr) => {
                // After 1 second, update the output with the filtered even numbers
                setTimeout(() => {
                    const evens = filterEvens(arr);
                    document.getElementById('output').textContent = evens.join(', ');
                }, 1000);

                // After another 2 seconds, update the output with the doubled even numbers
                setTimeout(() => {
                    const doubledEvens = multiplyByTwo(filterEvens(arr));
                    document.getElementById('output').textContent = doubledEvens.join(', ');
                }, 3000); // 1 second for the first set + 2 more seconds
            });
    </script>
</body>
</html>
