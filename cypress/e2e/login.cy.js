/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso' , () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')



    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'e-mail desconhecido')
    
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'incorreta')
    
    })


})