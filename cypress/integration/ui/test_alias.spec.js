/// <reference types = "cypress" />

context('Validar menus', () => {

    it('clicando no link comprar deve direcionar para a pagina de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        // cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
        // cy.get('#primary-menu > .menu-item-629 > a').click()

        //ALIAS
        cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
        // cy.get('@comprarMenuLink').contains('Comprar')
        // cy.get('@comprarMenuLink').click()

        //COMBINANDO ACOES
        // cy.get('@comprarMenuLink').contains('Comprar').click()
        cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop');
        cy.get('@comprarMenuLink').click();

        // cy.contains('Produtos')

        //SHOULD
        cy.get('.page-title').should('contain', 'Produtos')

        
    });
})
