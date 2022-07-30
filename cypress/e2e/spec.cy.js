describe('App spec', () => {
  beforeEach(() => {
    cy.fixture('mocktails.json').then((mocktails) => {
      cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', mocktails)
      cy.visit('http://localhost:3000/').wait(1000)
    })
  })

  it('should display heading on page load', () => {
    cy.get('h1').should('have.text', 'CockTail Lounge')
  })
  
  it('should display four randomized cocktails each time the page loads', () => {
    cy.get('.drink-card').should('have.length', 4)
  })
  
  //ISSUE TO RESOLVE 
  it('should be able to click on a random drink card and see a new page render with that drink cards details', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178310', {fixture: 'randomdetails.json'})
    cy.get('.random-container').find('.drink-card').first().click()
  })

  it("should be able to use forward and back arrows to navigate between pages", () => {
    cy.fixture('mocktails.json').then((mocktails) => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', mocktails)
    cy.get('.random-container').find('.drink-card').first().click()
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
    cy.get('.amarettoButton').should('exist').click().wait(1000)
  })
    
  it('should be able to click on the Martini drinks container and be routed to a new page', () => {
    cy.get('.martiniButton').should('exist').click().wait(1000)
  })

  //ISSUE TO RESOLVE
  // it('should return an error message if a network request fails', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', {
  //       statusCode: 404,
  //       body: {
  //         error: 'Not Found'
  //       }
  //     })
  //     .get('.error').should('have.text', 'Not Found')
  // })


  // should no longer see the main page, but should be routed to a new page and only see that specific drink with its photo, ingredients, and recipe displayed when a drink card is clicked
  // should be able to click on the title in the Navbar or back arrow to return to the home page
  // after I click on a specialty card, I should no longer see the main page, I should see a page with several drinks corresponding to the category I clicked on
  
  
  
  //As a user, I should be able to click on the randomize button to see 4 new cocktail images and names displayed. #9
  //As a user, when on the detail view page, I should be able to click on the favorite icon to store my recipe in a favorites category #12
  //As a user, I should be able to click the favorites button in the Navbar and be routed to my favorites page #13
  //As a user, when in the favorites view, I should not see the main page, and should be able to "un-favorite" a drink by clicking the icon #14

})