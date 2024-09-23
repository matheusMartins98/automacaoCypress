/// reference types="Cypress" />

import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^eu acesse a página home da aplicação$/, () => {
	
	loginPage.acessarPaginaLogin()
});

When(/^eu inserir meu email "([^"]*)" e minha senha "([^"]*)"$/, (email,senha) => {
	console.log(email,senha);
	loginPage.preencherLogin(email)
	loginPage.preencherPassword(senha)
});

When(/^clicar no botão entrar$/, () => {
loginPage.clicarEmLogin()
});

Then(/^tenho acesso com sucesso$/, () => {
	
});




