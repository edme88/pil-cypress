/// <reference types="cypress" />

describe("TEST DE SERVICIO DE CLARO", () => {
  it("Verificar Servicio contentManagement de Productos_destacados_spot", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/api/contentManagement?content=Productos_destacados_spot"
    ).then((respuesta) => {
      cy.log(`Respuesta del servicio de Inicio: ${JSON.stringify(respuesta)}`);
      cy.writeFile(
        "cypress/fixtures/autogenerado/Productos_destacados_spot.json",
        respuesta.body
      );
      expect(respuesta.status).to.eq(200);
    });
  });
});
