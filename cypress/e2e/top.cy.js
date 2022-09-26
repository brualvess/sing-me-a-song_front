const BASE_URL = 'http://localhost:3000/';

describe('Testa rota /top', () => {
  it('Deve ir para a pagina top', () => {
    cy.visit(BASE_URL)

    cy.get('#top').click()
    cy.url().should('equal', `${BASE_URL}top`)
  })
})