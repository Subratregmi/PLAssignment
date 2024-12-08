// support/pages/LoginPage.ts

export class LoginPage {
  // Selectors
  private userNameInput = "#userNameInput"
  private firstNameInput = "#firstNameInput"
  private lastNameInput = "#lastNameInput"
  private emailAddressInput = "#emailAddressInput"
  private confirmEmailAddressInput = "#confirmEmailAddressInput"
  private passwordInput = "#passwordInput"
  private confirmPasswordInput = "#confirmPasswordInput"
  private submitButton = "#submitbtn"
  private loginPageUrl = "/login"
  private signInTextSelector = ".mt-5.txalg"
  private userLoginField = "#userNameInput\\ user_login"
  private userPasswordField = "#passwordInput\\ user_pass"
  private wpSubmitButton = "#wp-submit"
  private logoutButton = ":nth-child(2) > .nav-link"

  // Methods
  public fillUserInformation(userData: { username: string; firstName: string; lastName: string; email: string; password: string }) {
    cy.get(this.userNameInput).type(userData.username)
    cy.get(this.firstNameInput).type(userData.firstName)
    cy.get(this.lastNameInput).type(userData.lastName)
    cy.get(this.emailAddressInput).type(userData.email)
    cy.get(this.confirmEmailAddressInput).type(userData.email)
    cy.get(this.passwordInput).type(userData.password)
    cy.get(this.confirmPasswordInput).type(userData.password)
    cy.get(this.submitButton).click()
  }

  public validateLoginPageUrl() {
    cy.url().should("include", this.loginPageUrl)
  }

  public login(username: string, password: string) {
    cy.validateText(this.signInTextSelector, "Sign In")
    cy.get(this.userLoginField).clear().type(username)
    cy.get(this.userPasswordField).clear().type(password)
    cy.get(this.wpSubmitButton).click()
  }

  public logout() {
    cy.get(this.logoutButton).click()
  }
}
