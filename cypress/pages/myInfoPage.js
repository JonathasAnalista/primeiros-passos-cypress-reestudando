class myInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active", // usei o nome de genericField porque não tem um selector específico desse elemento sao 13 elementos com o mesmo nome
            //dateField: "[placeholder='mm-dd-yyyy']",
            genericcombobox: ".oxd-select-text--active",
            //secondItemComboBox: ":nth-child(5) > span",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }
        return selectors;
    }
 
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }

    fillEmployeeDetails(employeeID, otherID, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
         cy.get(this.selectorsList().submitButton).eq(0).click({Force : true})
         cy.get('body').should('contain', 'Successfully Updated')
         cy.get('.oxd-toast-close')
    }

    fillStatus() {
        //cy.get(this.selectorsList().genericcombobox).eq(0).click({Force : true})
        //cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericcombobox).eq(1).click({Force : true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }
}

export default myInfoPage;