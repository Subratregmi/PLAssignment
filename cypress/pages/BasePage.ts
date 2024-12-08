export abstract class BasePage {
  // Common methods that can be used across all page objects
  protected wait(ms: number = 1000): void {
    cy.wait(ms)
  }

  // Method to check if an element is visible
  protected isElementVisible(selector: string): Cypress.Chainable<boolean> {
    return cy.get(selector).then(($el) => $el.is(":visible"))
  }

  // Method to scroll to an element
  protected scrollToElement(selector: string): void {
    cy.get(selector).scrollIntoView()
  }

  // Method to check if an element is enabled
  protected isElementEnabled(selector: string): Cypress.Chainable<boolean> {
    return cy.get(selector).then(($el) => !$el.is(":disabled"))
  }

  // Method to get text of an element
  protected getElementText(selector: string): Cypress.Chainable<string> {
    return cy.get(selector).invoke("text")
  }
}
