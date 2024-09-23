/// reference types="Cypress" />

import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const url = Cypress.config('baseUrl')
class LoginPage {

    acessarPaginaLogin() {
        cy.visit(url)
    }

    preencherLogin(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }

    preencherPassword(password) {
        cy.get(loginElements.inputPassWord()).type(password)
    }

    clicarEmLogin() {
        cy.contains(loginElements.btnLogin()).click()
    }

} export default LoginPage