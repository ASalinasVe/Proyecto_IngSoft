describe("Pagina de Mapa", () => {
  it('debería mostrar el mapa y un marcador con popup', () => {
    cy.visit("/componentes/mapa/mapa.html");
    cy.get('#map').should('exist');
    cy.wait(1000); // En caso de que el mapa tarde en cargar

    cy.get('.leaflet-marker-icon').should('have.length.at.least', 1);
    cy.get('.leaflet-marker-icon').first().click();
    cy.get('.leaflet-popup-content').should('contain.text', 'Hola desde la UCB');
  });
});
