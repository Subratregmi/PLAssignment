export class LoginPage {
  elements = {
    userNameInput: () => cy.get("#userNameInput"),
    firstNameInput: () => cy.get("#firstNameInput"),
    lastNameInput: () => cy.get("#lastNameInput"),
    emailAddressInput: () => cy.get("#emailAddressInput"),
    confirmEmailAddressInput: () => cy.get("#confirmEmailAddressInput"),
    passwordInput: () => cy.get("#passwordInput"),
    confirmPasswordInput: () => cy.get("#confirmPasswordInput"),
    submitButton: () => cy.get("#submitbtn"),
    signInTextSelector: ".mt-5.txalg",
    userLoginField: () => cy.get("#userNameInput\\ user_login"),
    userPasswordField: () => cy.get("#passwordInput\\ user_pass"),
    wpSubmitButton: () => cy.get("#wp-submit"),
    logoutButton: () => cy.get(":nth-child(2) > .nav-link"),
  }

  private loginPageUrl = "/login"

  fillUserInformation(userData: { username: string; firstName: string; lastName: string; email: string; password: string }) {
    this.elements.userNameInput().type(userData.username)
    this.elements.firstNameInput().type(userData.firstName)
    this.elements.lastNameInput().type(userData.lastName)
    this.elements.emailAddressInput().type(userData.email)
    this.elements.confirmEmailAddressInput().type(userData.email)
    this.elements.passwordInput().type(userData.password)
    this.elements.confirmPasswordInput().type(userData.password)
    this.elements.submitButton().click()
  }

  validateLoginPageUrl() {
    cy.url().should("include", this.loginPageUrl)
  }

  login(username: string, password: string) {
    cy.validateText(this.elements.signInTextSelector, "Sign In")
    this.elements.userLoginField().clear().type(username)
    this.elements.userPasswordField().clear().type(password)
    this.elements.wpSubmitButton().click()
  }

  logout() {
    this.elements.logoutButton().click()
  }
}
