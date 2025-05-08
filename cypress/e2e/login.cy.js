describe('Login Page Test', () => {
  it('logs in successfully with valid credentials', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    console.log("user Logged In Successfully");
  });
});
