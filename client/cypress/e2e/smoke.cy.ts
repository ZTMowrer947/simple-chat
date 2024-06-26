describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.findByText('Vite + Vue');
  });
});
