describe('Modificar Perfil de Usuario', () => {
    let variables;
    
    before(() => {
      cy.readFile('variables.json').then((content) => {
        variables = content;
      });
    });
     
      it('Como usuario administrador inicio sesion en Ghost, ingreso a mi perfil y lo edito', () => {
        cy.visit(variables.UrlBase + '/#/signin');
        cy.wait(2000);
        cy.get('#identification').type(variables.username);
        cy.wait(2000);
        cy.get('#password').type(variables.password);
        cy.wait(2000);
        cy.get('[data-test-button="sign-in"]').click();
        cy.wait(2000);
        cy.get('#ember34').click();
        cy.wait(2000);
        cy.get('a[href*="#/settings/staff/test/"]').click();
        cy.wait(2000);
        cy.get('[data-tooltip="Regenerate"]').click();
        cy.wait(2000);
        cy.get('[class="gh-btn gh-btn-icon gh-btn-red"]').click();
        cy.wait(2000);
        });
    });
    