describe('The Pipedrive Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://www.pipedrive.com/en');

    cy.contains(
      'The CRM platform to grow your business'
    );
  });
});