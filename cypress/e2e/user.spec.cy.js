import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new  LoginPage()
const DashboardPage = new dashboardPage()
const menupage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active", // usei o nome de genericField porque não tem um selector específico desse elemento sao 13 elementos com o mesmo nome
    dateField: "[placeholder='mm-dd-yyyy']",
    genericcombobox: ".oxd-select-text--active",
    secondItemComboBox: ":nth-child(6) > span",
    thirdItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Success', () => { //Se usar o .skip depois do it exemplo: it.skip (desliga esse test ele não irá executar)
     // se usar o it.only só executa esse it
     loginPage.accessLoginPage()
     loginPage.loginWithAnyUser(userData.UserSuccess.username, userData.UserSuccess.password)
     DashboardPage.checkDashboardPage()
     menupage.accessMyInfo()
     menupage.accessorPerformance()
    // cy.get(selectorList.firstNameField).clear().type('jonas')
    // cy.get(selectorList.lastNameField).clear().type('Paula')
    //cy.get(selectorList.genericField).eq(3).clear().type('nicknametest')
    // cy.get(selectorList.genericField).eq(4).clear().type('employID')
    // cy.get(selectorList.genericField).eq(5).clear().type('123456')
    // cy.get(selectorList.genericField).eq(6).clear().type('654321')
    // cy.get(selectorList.genericField).eq(7).clear().type('2020-05-01')
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.submitButton).eq(0).click({Force : true})
    // cy.get('body').should('contain', 'Successfully Updated')
    // cy.get('.oxd-toast-close')
    // cy.get(selectorList.genericcombobox).eq(0).click({Force : true})
    // cy.get(selectorList.secondItemComboBox).click()
    // cy.get(selectorList.genericcombobox).eq(1).click({Force : true})
    // cy.get(selectorList.thirdItemComboBox).click()
    


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})
