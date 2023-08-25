class YvytuHome {
  //Botones de Header
  getMenuPillButton() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }

  getMenuAllButton() {
    return cy.get("nav#menu-nav a");
  }

  //Banner de imágenes
  getGenericSubtitle() {
    return cy.get("h2");
  }

  getGenericButton() {
    return cy.get("a");
  }

  //Sección de textos

  //Boton ir arriba
  getIrArribaButton() {
    return cy.get("#btn-scroll-top");
  }

  //Reel de Imágenes
  getReelImagenes() {
    return cy.get('[class="slick-list draggable"]').eq(1).find("img");
  }

  //Cabañas
  getImgCabaniaYaguarete() {
    return cy.get("#slick-slide00");
  }

  getImgCabaniaArasari() {
    return cy.get("#slick-slide10");
  }

  //Como llegar

  //Contacto

  //Colaborá

  //Sponsor

  //Redes

  //Footer
}

export default new YvytuHome();
