describe('page', () => {
  before(() => {
    cy.visit('/index.html');
  });

  it('works', () => {
    // For the first header, I'm testing if it has the attribute `data-sorted` with the good value, and if the arrow is good
    cy.get('[data-testid=datatable-header-sorted]')
      .should('have.class', 'sortable')
      .should('have.attr', 'data-sorted', 'desc')
      .find('> i')
      .should('have.class', 'fa-sort-down');
  });

  it('not works', () => {
    // For the second header, I'm testing if it has NOT the attribute `data-sorted`, but I can't test the arrow
    cy.get('[data-testid=datatable-header-sortable]')
      .should('have.class', 'sortable')
      .should('not.have.attr', 'data-sorted')
      .find('> i')
      .should('have.class', 'fa-sort');
  });
});
