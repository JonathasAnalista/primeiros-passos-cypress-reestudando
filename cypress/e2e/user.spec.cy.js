import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active", // usei o nome de genericField porque não tem um selector específico desse elemento sao 13 elementos com o mesmo nome
    dateField: "[placeholder='mm-dd-yyyy']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Success', () => { //Se usar o .skip depois do it exemplo: it.skip (desliga esse test ele não irá executar)
    cy.visit('/auth/login') // se usar o it.only só executa esse it
    cy.get(selectorList.usernameField).type(userData.UserSuccess.username)
    cy.get(selectorList.passwordField).type(userData.UserSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //verificando se a página está correta depois de logar. opção 1
    cy.get(selectorList.dashboardGrid) //verificando se a página está correta depois de logar. opção 2 
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('jonas')
    cy.get(selectorList.lastNameField).clear().type('Paula')
    //cy.get(selectorList.genericField).eq(3).clear().type('nicknametest')
    cy.get(selectorList.genericField).eq(3).clear().type('employID')
    cy.get(selectorList.genericField).eq(4).clear().type('123456')
    cy.get(selectorList.genericField).eq(5).clear().type('654321')
    cy.get(selectorList.genericField).eq(6).clear().type('2020-05-01')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})
