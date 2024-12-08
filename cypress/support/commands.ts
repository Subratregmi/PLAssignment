declare namespace Cypress {
  interface Chainable {
    validateText(element: string, text: string): Chainable<void>
  }
}

Cypress.Commands.add("validateText", (element: string, text: string) => {
  cy.get(element)
    .invoke("text")
    .then((textValue) => {
      expect(textValue.trim()).to.eq(text)
    })
})
