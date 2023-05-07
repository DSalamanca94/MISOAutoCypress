const properties = require('./properties_sebastian.json');
const variables =  require('../../variables.json');

describe('Login and create a new page', () => {

  it('Iniciar sesión y crear una nueva página', () => {
    cy.visit(variables.UrlBase)
      .wait(1000)
      .get('#identification').type(variables.username)
      .wait(1000)
      .get('#password').type(variables.password)
      .get(properties.buttons.next).click()
      .wait(1000)
      .get(properties.buttons.pages).click()
      .wait(1000)
      .get(properties.buttons["New Page"]).click()
      .wait(2000)
      .get('textarea[placeholder="Page title"]').type('Edit Page Test')
      .wait(2000)
      .get('div[data-placeholder="Begin writing your page..."]').type('Este es un test para publicar una página, despublicarla para posteriormente editar y publicarla nuevamente')
      .wait(1000)
      .get(properties.buttons.publish).click()
      .wait(1000)
      .get(properties.buttons["continue to final review"]).click()
      .wait(1000)
      .get(properties.buttons["confirm publish"]).click()
      .wait(1000)
      .get(properties.buttons["back to editor"]).click()
      .wait(1000)
      .get(properties.buttons["back to pages"]).click()
      .wait(1000)
      // Edit page
      .get(properties.buttons["edit page"]).click()
      .wait(500)
      .get(properties.buttons["unpublish page"]).click()
      .wait(500)
      .get(properties.buttons["confirm unpublish"]).click()
      .wait(500)
      .get('textarea[placeholder="Page title"]').clear().type('Edit Page Test - Edited')
      .wait(500)
      .get(properties.buttons.publish).click()
      .wait(500)
      .get(properties.buttons["continue to final review"]).click()
      .wait(500)
      .get(properties.buttons["confirm publish"]).click()
      .wait(500)
      .get(properties.buttons["back to editor"]).click()
      .wait(500)
      .get(properties.buttons["back to pages"]).click()
      .wait(500)

    // Verify new page exists
      .get('ol.pages-list > li > a > h3:contains("Edit Page Test - Edited")')
      .should('be.visible')
      
  });
});