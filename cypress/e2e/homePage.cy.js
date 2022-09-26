const BASE_URL = 'http://localhost:3000/';
describe('Testa rota /', () => {
  it('Criar uma recomendação', () => {

    cy.visit(BASE_URL)

    cy.get('#name').type('Test')
    cy.get('#youtubeLink').type('https://www.youtube.com/watch?v=Uv9URjIBtUQ')
    cy.get('.create-recommendation').click();
  
    cy.url().should('equal', BASE_URL)
  })
  it('Votar em uma recomendação', ()=>{
    for (let i = 0; i <= 10; i++) {
      cy.get("#upvote").click();
    }
  })
  it('Votar negativo em uma recomendação', ()=>{
    for (let i = 0; i <= 1; i++) {
      cy.get("#downvote").click();
    }
  })
})