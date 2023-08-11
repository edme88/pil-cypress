/// <reference types="cypress" />
import EdenHome from "../../Page/edenHome";
const edenHome = new EdenHome();
import EdenHeader from "../../Page/edenHeader";
import edenSalas from "../../Page/edenSalas";
const edenHeader = new EdenHeader();

const utils = require("../../Page/utils");

describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.openWeb();
  });

  it("Verificar subtitulos", { tags: "@regression" }, () => {
    const txtBuscar = "BUSCAR EVENTO";
    const txtCalendar = "CALENDARIO DE EVENTOS";

    edenHome.getSubTitles().first().should("contain.text", txtBuscar);
    edenHome.getSubTitles().last().should("contain.text", txtCalendar);
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

    edenHeader.getMenuButtons().each((button, $index) => {
      cy.wrap(button).should("contain.text", menuBtn[$index]);
    });
  });

  it("Verificar pagina de recitales", () => {
    edenHeader.getMenuButtons().contains("RECITALES").click();
    //const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales";
    //cy.url().should("eq", newUrl);
    cy.url().should("include", "/sitio/contenido/recitales");
  });

  it("Verificar Imagen de Logo", () => {
    edenHeader
      .getImageLogo()
      .should("be.visible")
      .and("have.prop", "naturalHeight")
      .and("be.greaterThan", 0);
    const imgSource =
      "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenHeader.getImageLogo().should("have.attr", "src", imgSource);
    edenHeader.getImageLogo().should("have.attr", "alt", "EdenEntradas");
  });

  it.skip("Verificar el funcionamiento del buscador", () => {
    edenHeader.getSearchInput().type("Queen");
    edenHeader.getSearchSuggestion().click();
    const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" ';
    edenEvent.getEventTitle().should("have.text", eventTxt);
  });

  it("JIRA-2012 Verificar Titulo de Salas", () => {
    edenHeader.getMenuButtons().contains("SALAS").click();
  });

  it("Validación del calendario", () => {
    const [dia, mes, anio] = utils.getCompleteDate();

    edenHeader.getCalendarTitle().should("contain.text", mes);
    edenHeader.getCalendarTitle().should("contain.text", anio);

    edenHeader
      .getCalendar()
      .find("td")
      .each((cuadradoDia, $inx) => {
        if ($inx < dia) {
          cy.wrap(cuadradoDia).should(
            "have.class",
            "ui-datepicker-unselectable ui-state-disabled"
          );
        }
      });
  });

  it("Verificar nombre de salas", () => {
    //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
    edenHeader.getMenuButtons().contains("SALAS").click();

    const titulosSalas = [
      "Plaza de La Música",
      "Sala del Rey",
      "Refugio Guernica",
      "Captain Blue XL",
      "Teatro Cultural Cañada",
      "Sala Agustín Tosco – Luz y Fuerza - Bº Centro",
      "Sala de Las Américas",
      "Studio Theater",
      "Casa Babylon",
    ];

    //Validación de los títulos iterando por elemento
    edenSalas.getSalaBlock().each((block, $inx) => {
      cy.wrap(block).should("be.visible");
      cy.wrap(block).should("contain.text", titulosSalas[$inx]);
    });

    //Validación de títulos por array
    titulosSalas.forEach((titulo, $inx) => {
      edenSalas.getSalaBlock().eq($inx).should("contain.text", titulo);
    });
  });

  it("Verificar nombre de salas con FIXTURE", () => {
    //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
    edenHeader.getMenuButtons().contains("SALAS").click();

    cy.fixture("salas.json").then((file) => {
      //Validación de títulos por array
      file.forEach((sala, $inx) => {
        edenSalas.getSalaBlock().eq($inx).should("contain.text", sala.title);
        edenSalas.getSalaBlock().eq($inx).should("contain.text", sala.address);
      });
    });
  });
});
