import homePage from "../../pages/homePage"
import gamePage from "../../pages/gamePage"
import "cypress-map"

const testData = require('../../fixtures/test-data.json');
const env = require('../../fixtures/envConfig.json');

describe('Steam test', () => {
  testData.forEach((data) => {
    it('check steam', () => {
      cy.visit(env.url,{
        headers:{
          'Accept-Language': env.language
        }
      }); 
     
      homePage.elements.homePageContent().should("be.visible")
      homePage.findGame(data.game);
      gamePage.elements.searchTag().should("contain", data.game);
      gamePage.elements.gameResulsRow().should("exist");
      gamePage.sortGameByDesc();   

      gamePage.getPrices(data.count).then((list)=>{
        expect(list).to.be.sorted({descending: true});
      })
    })
  })  
})

  