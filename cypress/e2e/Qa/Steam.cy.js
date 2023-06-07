chai.use(require("chai-sorted"))
describe('Steam test', () => {
    it('check steam', () => {
      cy.visit('https://store.steampowered.com') 
      cy.get('div[class="home_page_content"]').should('be.visible')
      cy.get('input[id="store_nav_search_term"]').type("The Witcher").type('{enter}')
      cy.xpath('//*[@id="searchtag_tmpl"]//span').should('have.text', '"The Witcher"')
      cy.xpath('//*[@id="search_resultsRows"]//a').should('exist')
      cy.xpath('//*[@id="sort_by_dselect_container"]').click()
      cy.xpath('//*[@id="Price_DESC"]').click()     
      expect(cy.xpath('//*[@id="search_resultsRows"]//div[@class="col search_price  responsive_secondrow"]')).to.be.sorted()
    }) 
  })