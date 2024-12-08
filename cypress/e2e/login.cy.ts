import { commonFaker } from "../support/faker"
import { LoginPage } from "../pages/loginPage"

describe("Receive SMS Assignment Test", () => {
  const loginPage = new LoginPage()

  before(() => {
    cy.visit("")
  })

  const userData = {
    username: commonFaker.username,
    firstName: commonFaker.firstName,
    lastName: commonFaker.lastName,
    email: commonFaker.email,
    password: commonFaker.password,
  }

  context("Registration Negative Scenarios", () => {
    it("should prevent registration with existing username", () => {
      const existingUserData = {
        username: "Benny.Mayer31", // Use a known existing username
        firstName: commonFaker.firstName,
        lastName: commonFaker.lastName,
        email: commonFaker.email,
        password: commonFaker.password,
      }

      loginPage.fillUserInformation(existingUserData)

      // Assert error message for existing username
      cy.validateText(".error-alert", "ERROR: Username or email already exists. Please try another one.")
    })

    it("should prevent registration with invalid email format", () => {
      const invalidEmailData = {
        username: commonFaker.username,
        firstName: commonFaker.firstName,
        lastName: commonFaker.lastName,
        email: "invalid-email@gmail", // Invalid email format
        password: commonFaker.password,
      }

      loginPage.fillUserInformation(invalidEmailData)

      // Assert email validation error
      cy.validateText(".error-alert", "ERROR: Please enter a valid confrim email.")
    })

    it("should prevent registration with mismatched passwords", () => {
      const mismatchedPasswordData = {
        username: commonFaker.username,
        firstName: commonFaker.firstName,
        lastName: commonFaker.lastName,
        email: commonFaker.email,
        password: commonFaker.password,
      }

      // Deliberately use different passwords
      loginPage.elements.passwordInput().type(mismatchedPasswordData.password)
      loginPage.elements.confirmPasswordInput().type(`${mismatchedPasswordData.password}different`)
      cy.get("#submitbtn").click()

      // Assert password mismatch error
      cy.validateText(".error-alert", "ERROR: Passwords should be same and not empty")
    })
  })

  context("Register and Login Positive Scenarios", () => {
    it("should allow user to fill the information", () => {
      loginPage.fillUserInformation(userData)
    })

    it("should allow user to validate the login page url", () => {
      loginPage.validateLoginPageUrl()
    })

    it("should allow user to login", () => {
      loginPage.login(commonFaker.username, commonFaker.password)
    })

    it("should allow user to logout", () => {
      loginPage.logout()
    })

    it("should allow user to validate that user is logged out", () => {
      cy.validateText(".message", "You are now logged out.")
    })
  })

  // Negative Login Test Cases
  context("Login Negative Scenarios", () => {
    it("should prevent login with incorrect username", () => {
      loginPage.login("nonexistentuser", commonFaker.password)

      // Assert login failure message
      cy.validateText(".error", `Error: The username nonexistentuser is not registered on this site. If you are unsure of your username, try your email address instead.`)
    })

    it("should prevent login with incorrect password", () => {
      loginPage.login(commonFaker.username, "incorrectpassword")

      // Assert login failure message
      cy.validateText(".error", `Error: The password you entered for the username ${commonFaker.username} is incorrect. Lost your password?`)
    })

    it("should prevent login with empty credentials", () => {
      loginPage.elements.userLoginField().clear()
      loginPage.elements.userPasswordField().clear()
      loginPage.elements.wpSubmitButton().click()

      // Assert error for empty credentials
      cy.validateText(".error", "Error: The username field is empty.\n    Error: The password field is empty.")
    })
  })
})
