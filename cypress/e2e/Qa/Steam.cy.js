import homePage from "../../pages/homePage"
import gamePage from "../../pages/gamePage"
import "cypress-map"

const testData = require('../../fixtures/test-data.json')
const lang = require('../../fixtures/lang.json')

describe('Steam test', () => {
  testData.forEach((data) => {
    it('check steam', () => {
      cy.visit('https://store.steampowered.com',{
        headers:{
          'Accept-Language': lang.language
        }
      }) 
      homePage.checkHomePageIsOpen();
      homePage.findGame(data.game);
      gamePage.checkPageIsOpen(data.game)
      gamePage.checkGameRowIsNotEmpty();
      gamePage.sortGameByDesc();   

      cy.get('div[class="col search_price_discount_combined responsive_secondrow"]').filter(':lt('+data.count+')').mapInvoke('getAttribute','data-price-final').then((list)=>{
        expect(list).to.be.sorted({descending: true})
      })
    })
  })  
})

  