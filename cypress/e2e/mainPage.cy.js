describe('App spec', () => {
  beforeEach(() => {
    cy.fixture('mocktails.json').then((mocktails) => {
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', mocktails)
      cy.visit('http://localhost:3000/')
    })
  })

  it('should display heading on page load', () => {
    cy.get('h1').should('have.text', 'The CockTail Lounge 〄')
  })
  
  it('should display four randomized cocktails each time the page loads', () => {
    cy.get('.drink-card').should('have.length', 4)
  })
  
  it('should show a new selection of random drinks when the user clicks the shake it up button', () => {
    cy.get('.btn-shakeUp').click()
    cy.get('.drink-card').should('have.length', 4)
  })

  it('should be able to click on a random drink card and see a new page render with that drink cards details', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178310', {fixture: 'randomdetails.json'})
    cy.get('.random-container').find('.drink-card').contains('Brooklyn').click()
    cy.get('.detail-drink-card').contains('Preparation')
    cy.contains('Ingredients')
  })

  it("should be able to use forward and back arrows to navigate between pages", () => {
    cy.fixture('mocktails.json').then((mocktails) => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', mocktails)
    cy.visit('http://localhost:3000/').wait(1000)
    cy.get('.random-container').find('.drink-card').contains('Brooklyn').click()
      .url().should("eq", "http://localhost:3000/drinks/178310")
      .go("back")
      .url().should("eq", "http://localhost:3000/")
      .go("forward")
      .url().should("eq", "http://localhost:3000/drinks/178310")
    })
  })

  it('should display 2 specialty cocktail categories filtered into: Amaretto drinks and Martini drinks', () => {
    cy.get('.amarettoButton').should('exist')
    cy.get('.martiniButton').should('exist')
  })

  it('should be able to click on the Amaretto drinks container and be routed to a new page', () => {
    cy.get('.amarettoButton').click()
    cy.get('.AmarettoContainer').should('have.length', 1)
  })
    
  it('should be able to click on the Martini drinks container and be routed to a new page', () => {
    cy.get('.martiniButton').click()
    cy.get('.martiniContainer').should('have.length', 1)
  })

  it('should return an error message if a network request fails to fetch random drinks', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', {
        statusCode: 404,
        body: {
          error: 'Not Found'
        }
      })
      .get('.errorMessage')
      cy.contains("You didn't break the internet, but we can't find what you are looking for... Please try again later.")
  })

})