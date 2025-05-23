describe("Pruebas para ver-surtidores.dom.js", () => {
  
  beforeEach(() => {
    cy.visit("src/clases/ver-surtidores.dom.html", {
    onBeforeLoad(win) {
        win.obtenerSurtidores = () => [
          {
            nombre: "Surtidor A",
            ubicacion: "Zona 1",
            tipo: "Gasolina",
            precio: 5,
            cantidad: 100,
            disponible: true
          }
        ];
      }
    });
  });

  it("Debe actualizar la lista de surtidores al hacer clic en 'Actualizar'", () => {
    cy.get("#actualizar-surtidores").click();
    cy.get("#lista-surtidores li").should("have.length", 4);
    cy.get("#lista-surtidores li").first().should("contain", "Surtidor: Surtidor A");
  });

});