/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click() //.firt : - primeiro item da lista - .eq(2) : segundo item da lista - .last : ultimo item da lista
         
    });
    
    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 3

        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

 
    });
});