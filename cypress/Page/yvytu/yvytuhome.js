class YvytuHome {
  //Botones de Header
  getMenuPillButton() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }

  getMenuAllButton() {
    return cy.get("nav#menu-nav a");
  }

  //Banner de imágenes
  getCurrentImageBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }

  getImagenesBanner() {
    return cy.get(`[class*="bg-[url('/public/images/header-gallery/"]:visible`);
  }

  getImgButton() {
    return cy.get("ul").first().find("li button");
  }

  getGenericSubtitle() {
    return cy.get("h2");
  }

  getGenericParrafo() {
    return cy.get(".text-justify p");
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
