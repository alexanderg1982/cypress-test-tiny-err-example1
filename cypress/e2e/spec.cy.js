/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://alexdebug-moj.cs88.force.com/s/mytest')
    cy.get('.uiOutputRichText').contains('Use this HTML Editor to add your own markup.')
  })
})
