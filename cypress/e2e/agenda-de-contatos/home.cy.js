/// <reference types="cypress" />

describe('Testes para a home', () => {

    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length', 3)
    })

    it('Deve adicionar um novo contato', ()=> {
        cy.get('[type="text"]').type('Carolina')
        cy.get('[type="email"]').type('carolina@email.com')
        cy.get('[type="tel"]').type('11922223333{enter}')

        cy.get('.contato').should('have.length', 4)
    })

    it('Deve editar e salvar', ()=> {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Flavia')
        cy.get('[type="email"]').clear().type('flavia@email.com')
        cy.get('[type="tel"]').clear().type('44955556666{enter}')
        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Flavia')

    })

    it('Deve remover um contato', ()=>{
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        
        cy.get('.contato').should('have.length', 3)
    })

})