class homePage{
    elements = {
        homePageContent : () => cy.get('div[class="home_page_content"]'),
        navSearchInput : () => cy.get('input[id="store_nav_search_term"]')
    }

    checkHomePageIsOpen = function(){
        this.elements.homePageContent().should('be.visible')
    }

    findGame = function(text) {
        this.elements.navSearchInput().type(text).type('{enter}')
    }
}

module.exports = new homePage();