/// <reference types="cypress" />

describe("Tests sobre la página de YVYTU", () => {
  it("Verificar Barra de Navegación - Iterar en Botones pildora", () => {
    cy.visit("https://vientosdelaselva.com.ar/");

    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    cy.get('a[class*="rounded-full py-2 px-4"]').each((boton, indice) => {
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

    cy.get("nav#menu-nav a").each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });
});
