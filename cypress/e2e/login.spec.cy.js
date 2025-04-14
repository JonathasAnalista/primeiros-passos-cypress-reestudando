import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Success', () => { //Se usar o .skip depois do it exemplo: it.skip (desliga esse test ele não irá executar)
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.UserSuccess.username)
    cy.get(selectorList.passwordField).type(userData.UserSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //verificando se a página está correta depois de logar. opção 1
    cy.get(selectorList.dashboardGrid) //verificando se a página está correta depois de logar. opção 2 
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})
