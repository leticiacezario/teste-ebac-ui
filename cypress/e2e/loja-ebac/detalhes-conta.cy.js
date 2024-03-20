/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture ('perfil').then(login =>
            cy.login('aluno_ebac@teste.com', 'teste@teste.com'))
        
    });

    afterEach(() => {
        cy.screenshot() //Screenshot no final de cada teste
        
    });

    it('Deve completar os detalhes da conta com sucesso', () => {
        cy.detalhesConta('Leticia', 'Cezario', 'Leticia QA')
        cy.get('.woocommerce-message').should( 'contai' , 'Detalhes da conta modificados com sucesso.')
    });
    
});