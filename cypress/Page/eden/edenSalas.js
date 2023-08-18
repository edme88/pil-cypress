class EdenSalas {
  getSalaBlock() {
    return cy.get('[id^="salasParent_"]');
  }
}

export default new EdenSalas();
