/// <reference types="cypress" />

describe("TEST DE SERVICIO DE EDEN", () => {
  it("Verificar Servicio de INICIO 1", () => {
    cy.request(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio"
    ).then((respuesta) => {
      cy.log(`Respuesta del servicio de Inicio: ${JSON.stringify(respuesta)}`);
      expect(respuesta.status).to.eq(200);
    });
  });

  it.only("Verificar Servicio de INICIO 2", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio",
    }).then((respuesta) => {
      cy.log(`Respuesta del servicio de Inicio: ${JSON.stringify(respuesta)}`);
      expect(respuesta.status).to.eq(200);
      cy.writeFile(
        `cypress/fixtures/autogenerado/eventos.json`,
        respuesta["body"]
      );
    });
  });
});
