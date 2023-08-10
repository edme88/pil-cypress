/// <reference types="cypress" />
const edenHome2 = require("../../Page/edenHome2");
const edenHeader2 = require("../../Page/edenHeader2")

describe("Test sobre la página de EDEN ENTRADAS", () => {
  it("Verificar subtitulos", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    edenHome2.getSubTitles().first().should("contain.text", "BUSCAR EVENTO");
    edenHome2
      .getSubTitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
  });

  it("Verificar Menu", () => {
    cy.visit("https://www.edenentradas.com.ar/");
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
    cy.visit("https://www.edenentradas.com.ar/");
    edenHeader2.getMenuButtons().eq(3).click();
  });
});
