describe('Specific spec', () => {
    beforeEach(() => {
      cy.fixture('mocktails.json').then((mocktails) => {
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', mocktails)
        cy.visit('http://localhost:3000/').wait(1000)
      })
    })

    it('should no longer show the specialty or random container after a specialty drink button is clicked', () => {
        cy.get('.amarettoButton').should('exist').click().wait(1000)
        cy.get('.random-container').should('not.exist')
    })

    it('should no longer show the specialty or random container after a specialty drink button is clicked', () => {
        cy.get('.amarettoButton').should('exist').click().wait(1000)
        cy.get('.specialty-container').should('not.exist')
    })

    it('should be able to click on the title in the Navbar or back arrow to return to the home page', () => {
        cy.get('.martiniButton').click()
            .url().should("eq", "http://localhost:3000/MartiniDeck")
            .go("back")
            .url().should("eq", "http://localhost:3000/")
            .go("forward")
            .url().should("eq", "http://localhost:3000/MartiniDeck")
        })
    
    it('should no longer see the main page, after I click on a specialty card, I should see a page with several drinks corresponding to the category I clicked on', () => {
        cy.get('.amarettoButton').click()
        .url().should("eq", "http://localhost:3000/AmarettoDeck")
    })

    it('should return an error message if a network request fails to fetch specialty drinks', () => {
        cy.visit('http://localhost:3000/MartiniDeck')
        cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini', {
            statusCode: 404,
        })
        .get('.errorMessage')
        cy.contains("You didn't break the internet, but we can't find what you are looking for... Please try again later.")
    })

})