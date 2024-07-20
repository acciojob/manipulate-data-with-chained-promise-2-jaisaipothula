describe('Testing Async Operations with Promises', () => {
  it('should manipulate array as per requirements', () => {
    const baseUrl = "http://localhost:3000";  // Adjust the base URL as per your setup

    cy.visit(baseUrl + "/main.html");

    // First promise: Resolve with an array after 3 seconds
    cy.wait(3000).then(() => {
      // Simulated input array
      const inputArray = [1, 2, 3, 4];

      // Display initial array
      cy.get("#output").should("contain", inputArray.join(','));

      // Second promise: Filter out odd numbers after 1 second
      const filteredArray = inputArray.filter(num => num % 2 === 0);
      cy.wait(1000).then(() => {
        cy.get("#output").should("contain", filteredArray.join(','));
      });

      // Third promise: Multiply even numbers by 2 after 2 seconds
      const transformedArray = inputArray.map(num => (num % 2 === 0) ? num * 2 : num);
      cy.wait(2000).then(() => {
        cy.get("#output").should("contain", transformedArray.join(','));
      });
    });
  });
});

