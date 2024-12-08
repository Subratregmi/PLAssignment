import { BasePage } from "./BasePage"

export class LoginRegPage extends BasePage {
  // Selectors
  private selectors = {
    usernameInput: "#wp-username",
    passwordInput: "#wp-password",
    loginButton: "#wp-submit",
    errorMessage: ".error-message",
    welcomeMessage: ".welcome-banner",
  }

  // Navigate to login page
  visit(): void {
    cy.visit("/login")
  }

  // Enter username
  enterUsername(username: string): void {
    cy.get(this.selectors.usernameInput).clear().type(username)
  }

  // Enter password
  enterPassword(password: string): void {
    cy.get(this.selectors.passwordInput).clear().type(password)
  }

  // Click login button
  submitLogin(): void {
    cy.get(this.selectors.loginButton).click()
  }

  // Validate error message
  validateErrorMessage(expectedMessage: string): void {
    cy.get(this.selectors.errorMessage).should("be.visible").and("contain.text", expectedMessage)
  }

  // Validate successful login
  validateSuccessfulLogin(): void {
    cy.get(this.selectors.welcomeMessage).should("be.visible")
  }

  // Additional login-specific methods
  forgotPassword(): void {
    cy.contains("Forgot Password").click()
  }

  // Check if login button is enabled
  isLoginButtonEnabled(): Cypress.Chainable<boolean> {
    return this.isElementEnabled(this.selectors.loginButton)
  }
}
