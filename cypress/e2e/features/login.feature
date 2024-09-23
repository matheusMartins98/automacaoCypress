Feature: Login
    Funcionalidade para realizar login com sucesso no sistema

    Scenario Outline: "<cenario>"
        Given eu acesse a página home da aplicação
        When eu inserir meu email "<email>" e minha senha "<senha>"
        And clicar no botão entrar
        Then tenho acesso com sucesso

        Examples:
            | cenario           | email               | senha    |
            | Login com sucesso | user@phptravels.com | demouser |
