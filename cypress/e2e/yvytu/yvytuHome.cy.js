/// <reference types="cypress" />
const yvytuHome = require("../../Page/yvytu/yvytuhome");

describe("Tests sobre la página de YVYTU", () => {
  it("Verificar Barra de Navegación - Iterar en Botones pildora", () => {
    cy.visit("https://vientosdelaselva.com.ar/");

    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    yvytuHome.getMenuPillButton().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it("Verificar Barra de Navegación - Iterar en Botones", () => {
    cy.visit("https://vientosdelaselva.com.ar/");

    const menu = [
      "",
      "LA RESERVA",
      "CABAÑAS",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];

    yvytuHome.getMenuAllButton().each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });
});
