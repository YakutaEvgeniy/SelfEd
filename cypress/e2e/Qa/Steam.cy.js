import homePage from "../../pages/homePage"
import gamePage from "../../pages/gamePage"

const testData = require('../../fixtures/test-data.json')
const lang = require('../../fixtures/lang.json')

describe('Steam test', () => {
  testData.forEach((data) => {
    it('check steam', () => {
      cy.visit('https://store.steampowered.com') 
      homePage.checkHomePageIsOpen();
      homePage.findGame(data.game);
      gamePage.checkPageIsOpen(data.game)
      gamePage.checkGameRowIsNotEmpty();
      gamePage.sortGameByDesc();   

      const gameElements =[]
      //cy.get('div[class="col search_price_discount_combined responsive_secondrow"]').invoke('attr','data-price-final').filter(':lt('+data.count+')').each(($el)=>{
        //cy.wrap($el).invoke('data-price-final').then((val) => gameElements.push(val))
        //gameElements.push(cy.wrap($el).invoke('data-price-final'))
        //debugger
      //})
      cy.xpath('//div[@class="col search_price_discount_combined responsive_secondrow"]').filter(':lt('+data.count+')').then(($els) => {
        
    const prList = $els.map(($el) =>{
      console.log($el);
     cy.wrap($el).invoke('attr', 'data-price-final')
    });
    return Promise.all(prList);
  })
  .then((prices) => {
    gameElements.push(prices)
  }); 


      expect(gameElements).to.be.sorted({descending: true})
      //expect(cy.xpath('div[class="col search_price_discount_combined responsive_secondrow"]')).to.be.sorted()   
    })
  })  
})

  