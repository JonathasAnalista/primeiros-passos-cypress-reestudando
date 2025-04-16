
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'


const loginPage = new  LoginPage()
const DashboardPage = new dashboardPage()


describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
  })
})
