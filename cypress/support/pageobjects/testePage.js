///<reference types="Cypress"/>

import testeElementos from '../ElementosPage/testeElementos'

const Elementos = new testeElementos

const NavegadorURL = Cypress.config("baseUrl")

class TestePage{

    abrirUrl(){
        cy.visit(NavegadorURL)
    }


    preencherCampoPrimeiroNome(){
        cy.get(Elementos.campoPrimeiroNome()).type('Ailton')
    }

    preencherCampoSegundoNome(){
        cy.xpath(Elementos.campoSegundoNome()).type('Santos')
    }

    preencherCampoEndereco(){
        cy.xpath(Elementos.campoEndereco()).type('Rua Vinte de Novembro, 123 - Rio de Janeiro')
    }

    preencherCampoEmail(){
        cy.xpath(Elementos.campoEmail()).type('ailton@teste.com')
    }

    preencherCampoTelefone(){
        cy.xpath(Elementos.campoTelefone()).type('21999999999')
    }

    preencherCampoSexo(){
        cy.xpath(Elementos.campoSexo()).click()
    }

    preencherCampoHobbies(){
        cy.xpath(Elementos.campoHobbies()).click()
    }
   

    preencherCampoSenha(){
        cy.wait(2000)
        cy.xpath(Elementos.campoSenha()).type('12345678')
    }

    preencherCampoConfirmarSenha(){
        cy.xpath(Elementos.campoConfirmarSenha()).type('12345678')
    }

    clicarbotaoRefresh(){
        cy.get(Elementos.botaoRefresh()).click()
    }

    
    ValidarTelaLimpa(){
        cy.wait(2000)
        cy.screenshot()
    }

}

export default TestePage;