describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('the h1 contains the correct test', () => {
    cy.get("h1")
    .contains("SORT Guitar Store")
  })
  it.only("the features on the homepage are correct", () => {
    cy.get('dt').eq(0).contains('3 Guitars')
   })
})