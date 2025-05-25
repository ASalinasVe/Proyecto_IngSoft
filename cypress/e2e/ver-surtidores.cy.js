describe("Pruebas para ver-surtidores.dom.js", () => {
  
  beforeEach(() => {
    //limpiar localstorage
    cy.clearLocalStorage();

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

        win.obtenerSurtidoresDisponibles = () => [
         {
            nombre: "Surtidor A",
            ubicacion: "Zona 1",
            tipo: "gasolina",
            precio: 5,
            cantidad: 100,
            disponible: true
          },
          {
            nombre: "Surtidor B",
            ubicacion: "Zona 2",
            tipo: "diesel",
            precio: 6,
            cantidad: 80,
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

  it("Debe mostrar sólo surtidores disponibles al hacer clic en 'Surtidores Disponibles'", () => {
    cy.get("#obtener-surtidores-disponibles").click();
    cy.get("#lista-surtidores li").should("have.length", 2);
    cy.get("#lista-surtidores li").eq(0).should("contain", "Surtidor: Surtidor A");
    cy.get("#lista-surtidores li").eq(1).should("contain", "Surtidor: Surtidor B");
  });

});