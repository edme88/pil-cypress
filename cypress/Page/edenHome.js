/// <reference types="cypress" />

class EdenHomeLocators {
  constructor() {
    this.subTitles = "h5";
  }
}

export default class EdenHome {
  constructor() {
    this.locators = new EdenHomeLocators();
  }

  getSubTitles() {
    return cy.get(this.locators.subTitles);
  }
}

