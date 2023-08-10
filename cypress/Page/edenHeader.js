/// <reference types="cypress" />
class EdenHeaderLocators {
  constructor() {
    //Botonera y Header Principal
    this.imageLogo = "#header-logo";
    this.menuButtons = "#navbar a";
    //Sección de Búsqueda
    this.searchInput = "#espectaculoList";
    this.searchSuggestion = ".ui-menu-item";
    //Calendario
    this.calendarTitle = ".ui-datepicker-title";
    this.calendar = ".ui-datepicker-calendar";
  }
}

export default class EdenHeader {
  constructor() {
    this.locators = new EdenHeaderLocators();
  }

  //Botonera y Header Principal
  getImageLogo() {
    return cy.get(this.locators.imageLogo);
  }

  getMenuButtons() {
    return cy.get(this.locators.menuButtons);
  }

  //Sección de Búsqueda
  getSearchInput() {
    return cy.get(this.locators.searchInput);
  }

  getSearchSuggestion() {
    return cy.get(this.locators.searchSuggestion);
  }

  //Calendario
  getCalendarTitle() {
    return cy.get(this.locators.calendarTitle);
  }

  getCalendar() {
    return cy.get(this.locators.calendar);
  }
}
