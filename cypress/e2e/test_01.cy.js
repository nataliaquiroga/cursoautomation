/// <reference types="Cypress"/>

beforeEach(() => {
    //Ingreso a la pagina
    cy.visit('http://opencart.abstracta.us/')
})

// Suite test cases
describe('Primer conjunto de test cases.', function () {

    //testcase1
    it('Registro sin completar campos mandatorios', function () {

        //click Sign in
        //cy.get('.login').click()
        cy.get('.dropdown > .dropdown-toggle > .fa').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()

        
    })
})
