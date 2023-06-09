class gamePage{
    elements = {
        searchTag : () => cy.xpath('//*[@id="searchtag_tmpl"]//span'),
        gameResulsRow : () => cy.xpath('//*[@id="search_resultsRows"]//a'),
        sortGameMenu : () => cy.xpath('//*[@id="sort_by_dselect_container"]'),
        descElement : () => cy.xpath('//*[@id="Price_DESC"]')
    }

    checkPageIsOpen = function(text) {
        this.elements.searchTag().should('contain', text)
    }

    checkGameRowIsNotEmpty = function() {
        this.elements.gameResulsRow().should('exist')
    }

    sortGameByDesc = function() {
        this.elements.sortGameMenu().click()
        this.elements.descElement().click()
        cy.wait(2000)
    }
}

module.exports = new gamePage();