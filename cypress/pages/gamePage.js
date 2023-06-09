class gamePage {
	elements = {
		searchTag: () => cy.xpath('//*[@id="searchtag_tmpl"]//span'),
		gameResulsRow: () => cy.xpath('//*[@id="search_resultsRows"]//a'),
		sortGameMenu: () => cy.xpath('//*[@id="sort_by_dselect_container"]'),
		descElement: () => cy.xpath('//*[@id="Price_DESC"]'),
        prices: () => cy.get('div[class="col search_price_discount_combined responsive_secondrow"]')
	};

	sortGameByDesc = function () {
		this.elements.sortGameMenu().click();
		this.elements.descElement().click();
		cy.wait(2000);
	};

    getPrices =  (count) => {
        return this.elements.prices().filter(`:lt(${count})`).mapInvoke('getAttribute','data-price-final');
    };
}

module.exports = new gamePage();
