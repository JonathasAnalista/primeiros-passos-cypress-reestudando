import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new  LoginPage()
const DashboardPage = new dashboardPage()
const menupage = new MenuPage()
const MyInfoPage = new myInfoPage()


describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => { 
     loginPage.accessLoginPage()
     loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
     DashboardPage.checkDashboardPage()
     menupage.accessMyInfo()
     MyInfoPage.fillPersonalDetails(chance.first(), chance.last())
     MyInfoPage.fillEmployeeDetails(chance.integer({ min: -20, max: 20 }), chance.integer(), chance.integer(), '2025-01-01')
     MyInfoPage.fillStatus()
     MyInfoPage.saveForm()
})

})