/// <reference types = "cypress" />

import LoginPage from '../../support/pageObjects/login';
import MinhaContaPage from '../../support/pageObjects/minhaConta';

// const profile = require('../fixtures/user.json')

context('Login', () => {
    let profile;

    before(() => {
        cy.fixture('user').then(dadosUsuarios => {
            profile = dadosUsuarios;
        })
    })

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    it('com usuário cadastrado redirecionar para a página de Minha Conta', () => {
        cy.get('.icon-user-unfollow').click();
        // cy.get('#username').type('eshi')
        // cy.get('#password').type('teste@123')

        //CONST/FIXTURE
        // cy.get('#username').type(profile.usuario)
        // cy.get('#password').type(profile.senha)

        //PAGEOBJECTS
        // LoginPage.login(profile.usuario, profile.senha);
        // MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')

        //COMMANDS
        cy.login(profile.usuario, profile.senha)
        cy.mensagemBoasVindas().should('contain', 'Welcome Eshi Cruz !')

        // cy.get('.woocommerce-form > .button').click()
        // cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')
        
    })

      //EXERCÍCIO
      it('com usuário não cadastrado informa que o usuário não está cadastrado', () => {
        // INCLUIR UM USUÁRIO NÃO CADASTRADO NO JSON FILE
        // TENTAR FAZER O LOGIN E VERIFICAR QUE EXIBIU A MENSAGEM DE USUÁRIO NÃO CADASTRADO
        cy.login(profile.usuarioNaoCadastrado.usuario, profile.usuarioNaoCadastrado.senha)
        cy.erroUsuarioNaoLogado().should('contain', NOT_REGISTERED_ERROR_MESSAGE)
        
    });
})