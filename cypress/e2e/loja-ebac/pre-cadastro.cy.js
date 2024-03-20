/// <reference types="cypress" />
var faker = require('faker-br'); //Para utilização do faker

describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit ('minha-conta/') //Acessa a url no inicio de cada teste
    });
    

    afterEach(() => {
        cy.screenshot() //Screenshot no final de cada teste
        
    });
        

    it('Deve completar o pré cadastro com sucesso', () => { //Primeiro cenário
       //Criação de variavel para utilizar variável
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker) //utilizando faker para preencher email
        cy.get('#reg_password').type('Teste@123!')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker) //utilizando faker para preencher primeiro nome
        cy.get('#account_last_name').type(sobrenomeFaker) //utilizando faker para preencher ultimo nome
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.') ///validação final, resultado esperado

        
    })


    it.only('Deve completar o cadastro utilizando comandos customizados', () => {
        cy.preCadastro (faker.internet.email(),'Teste@123!',faker.name.firstName(), faker.name.lastName() )

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.') ///validação final, resultado esperado

        
    });
    
})