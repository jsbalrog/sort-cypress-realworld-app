import Subscribe from "./Subscribe"

describe('Subscribe', () => {
  it('contains the correct placeholder text', () => {
    cy.mount(<Subscribe />)
    cy.get("input").should("have.attr", "placeholder", "Subscribe for Updates")
  })

  it("allows users to subscribe to the email list", () => {
    cy.mount(<Subscribe />)

    cy.intercept("POST", "/api/subscribe", {
      body: {
        message: "Success: tom@aol.com has been successfully subscribed"
      }
    }).as("emailSubscribe")

    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()

    cy.wait("@emailSubscribe")
    
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })
})