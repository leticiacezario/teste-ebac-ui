/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/') //Acessa a url no inicio de cada teste
    });
    
    afterEach(() => {
        cy.screenshot() //Screenshot no final de cada teste
        
    });
    
    it('Deve fazer login com sucesso' , () => { //Primeiro cenário 
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta') //validação final, resultado esperado

    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{ //Segundo cenário
        cy.get('#username').type('aluno_@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'e-mail desconhecido') //validação final, resultado esperado
    
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{  //Terceiro cenário
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'incorreta') //validação final, resultado esperado
    
    })


})