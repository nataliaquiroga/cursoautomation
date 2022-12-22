/// <reference types="Cypress"/>

beforeEach(() => {
    //Ingreso a la pagina
    cy.visit('https://www.vivelibre.com.ar/account/register/')
})

// Suite test cases
describe('Primer conjunto de test cases.', function () {

    //testcase1
    it('Buscar libros que existen', () => {
        // https://on.cypress.io/type
        cy.get('#name')
          .type('Bennetton').should('have.value', 'Bennetton')
      
        

       
      })
    
    



})
