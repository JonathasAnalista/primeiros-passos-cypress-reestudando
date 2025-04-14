describe('Orange HRM Tests', () => {
  it('Login - Success', () => { //Se usar o .skip depois do it exemplo: it.skip (desliga esse test ele não irá executar)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //verificando se a página está correta depois de logar. opção 1
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard') //verificando se a página está correta depois de logar. opção 2 
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('teste')
    cy.get("[name='password']").type('teste')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})
