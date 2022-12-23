describe('lib1', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('tailwin-nx2-header').should('exist');
  });
});
