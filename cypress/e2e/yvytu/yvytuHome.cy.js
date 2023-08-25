/// <reference types="cypress" />
const yvytuHome = require("../../Page/yvytu/yvytuhome");

describe("Tests sobre la página de YVYTU", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });

  it("Verificar Barra de Navegación - Iterar en Botones pildora", () => {
    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    yvytuHome.getMenuPillButton().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it("Verificar Barra de Navegación - Iterar en Botones", () => {
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

  it("Verificar Imágenes del Banner Principal", () => {
    /*yvytuHome.getImagenesBanner().each((imagen) => {
      cy.wrap(imagen).should("exist");
    });*/
    cy.log("Revisar el test");
    yvytuHome.getImagenesBanner().eq(0).should("be.visible");
    yvytuHome.getImgButton().eq(1).click();
    yvytuHome.getImagenesBanner().eq(1).should("be.visible");
    yvytuHome.getImgButton().eq(2).click();
    yvytuHome.getImagenesBanner().eq(2).should("be.visible");
    yvytuHome.getImgButton().last().click();
    yvytuHome.getImagenesBanner().eq(3).should("be.visible");
  });

  it("Verificar comportamiento del botón Ir Arriba", () => {
    yvytuHome.getIrArribaButton().should("not.be.visible");
    yvytuHome
      .getGenericSubtitle()
      .contains("Conocé una historia mágica.")
      .scrollIntoView();

    yvytuHome
      .getIrArribaButton()
      .should("be.visible")
      .and("contain.text", "Ir arriba")
      .click();
    /*yvytuHome.getIrArribaButton().should("be.visible");
    yvytuHome.getIrArribaButton().should("contain.text", "Ir arriba");
    yvytuHome.getIrArribaButton().click();*/
    yvytuHome.getMenuPillButton().each((boton) => {
      cy.wrap(boton).should("be.visible");
    });
    yvytuHome.getIrArribaButton().should("not.be.visible");
  });

  it.only("Verificar textos de la página", () => {
    yvytuHome
      .getGenericSubtitle()
      .eq(1)
      .should(
        "contain.text",
        "\n            Conocé una historia mágica. Experimentá la resiliencia de la\n            naturaleza en su mayor dimensión.\n          "
      );
    yvytuHome
      .getGenericParrafo()
      .eq(0)
      .invoke("text")
      .then((texto) => {
        cy.log(texto);
        if (
          texto.includes(
            "La destrucción del ecosistema de selva atlántica durante las últimas décadas fue abismal."
          )
        ) {
          cy.log("EL tetxo esta contenido");
        } else {
          cy.log("EL tetxo NO esta contenido");
        }
      });
  });

  it("Verificar Botón de Reservar", () => {
    yvytuHome
      .getGenericButton()
      .contains("Reservar")
      .should("have.attr", "href", "https://wa.me/5493757454400")
      .and("have.attr", "target", "_blank");

    yvytuHome
      .getGenericButton()
      .contains("Reservar")
      .should(
        "have.css",
        "Background",
        "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });

  it("Verificar Reel de Imágenes", () => {
    let arrayImagenes = [
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
      "carpincho.png",
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
      "carpincho.png",
      "frase01.png",
      "noche.png",
      "pasafauna.png",
      "picaflor.png",
    ];

    yvytuHome.getReelImagenes().each((imagenes, index) => {
      cy.wrap(imagenes).should(
        "have.attr",
        "src",
        `./public/images/gallery/${arrayImagenes[index]}`
      );
    });

    /*let newArray = [];
    yvytuHome
      .getReelImagenes()
      .each((imagen, index) => {
        cy.wrap(imagen)
          .invoke("attr", "src")
          .then((texto) => {
            cy.log(texto);
            newArray.push(texto);
          });
      })
      .then(() => {
        cy.log(JSON.stringify(newArray));
      });*/
  });

  it("Verificar Imagenes de las Cabañas", () => {
    cy.log("**Todas las imagenes tienen como texto alternativo Imagen 1**");
    cy.log("**YVYTU-015 Error texto alternativo**");
    yvytuHome
      .getImgCabaniaYaguarete()
      .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
      .and("have.attr", "alt", "Imagen 1");
    yvytuHome
      .getImgCabaniaArasari()
      .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
      .and("have.attr", "alt", "Imagen 1");
  });

  it("Verificar Botón de Donar", () => {
    yvytuHome
      .getGenericButton()
      .contains("Donar")
      .should("have.attr", "href", "https://cafecito.app/reserva-yvytu")
      .and("have.attr", "target", "_blank");

    yvytuHome
      .getGenericButton()
      .contains("Donar")
      .should(
        "have.css",
        "Background",
        "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });
});
