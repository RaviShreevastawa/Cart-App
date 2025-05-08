describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/register')
    cy.get('input[name="fullname"]').type('Pandu');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
  })
})