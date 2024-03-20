/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista ('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
         
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProdutos('Arcadio Gym Short')
        cy.get('.product_title').should('contain','Arcadio Gym Short')
        
    });

    it('Deve visitar a página do produto', () => {
        
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