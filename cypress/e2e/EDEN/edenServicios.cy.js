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

  it("Verificar Servicio de INICIO 2", () => {
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

  it("Verificar Servicio de INICIO 3 - Validar tipo de datos", () => {
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
      cy.validarSchema(`eventos_schema`, "eventos");
    });
  });

  it("Verificar Servicio de CUARTETOS 4 - Validar tipo de datos", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/cuartetos",
    }).then((respuesta) => {
      cy.log(
        `Respuesta del servicio de Cuartetos: ${JSON.stringify(respuesta)}`
      );
      expect(respuesta.status).to.eq(200);
      cy.writeFile(
        `cypress/fixtures/autogenerado/cuartetos.json`,
        respuesta["body"]
      );
      cy.validarSchema(`cuartetos_schema`, "cuartetos");
    });
  });

  it("Verificar Servicio de INICIO 3BIS - Validar tipo de datos", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio",
      "eventos_schema",
      "eventos"
    );
  });

  it("Verificar Servicio de CUARTETOS 4BIS - Validar tipo de datos", () => {
    cy.callServiceCheck(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/cuartetos",
      "cuartetos_schema",
      "cuartetos"
    );
  });
});
