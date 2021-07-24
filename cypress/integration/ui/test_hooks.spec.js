/// <reference types = "cypress" />

context('Validar menus', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('clicando no link comprar deve direcionar para a pagina de compra', () => {
        cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
        cy.get('@comprarMenuLink').contains('Comprar').and('have.attr', 'href').and('include', 'shop');
        cy.get('@comprarMenuLink').click();
        cy.get('.page-title').should('contain', 'Produtos')
        cy.url().should('contain', '/shop')
    });

    it('clicando no link  de conta deve direcionar para a página de login/cadastro', () => {
        cy.get('.icon-user-unfollow').click();
        cy.url().should('contain', '/my-account-2');
    });
})
