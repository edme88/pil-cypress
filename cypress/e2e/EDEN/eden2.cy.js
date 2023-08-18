/// <reference types="cypress" />
const edenHome2 = require("../../Page/eden/edenHome2");
const edenHeader2 = require("../../Page/eden/edenHeader2");

describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.openWeb();
  });
  it("Verificar subtitulos", () => {
    edenHome2.getSubTitles().first().should("contain.text", "BUSCAR EVENTO");
    edenHome2
      .getSubTitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
  });

  it("Verificar Menu", () => {
    const menuBtn = [
      "HOME",
      "TODOS",
      "AGENDA DEL FINDE",
      "RECITALES",
      "TEATROS",
      "CUARTETOS",
      "FESTIVALES",
      "SALAS",
    ];

    menuBtn.forEach((txtBtn, $index) => {
      edenHeader2.getMenuButtons().eq($index).should("contain.text", txtBtn);
    });
  });

  it("Verificar pagina de recitales", () => {
    edenHeader2.getMenuButtons().eq(3).click();
  });
});
