// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const Ajv = require("ajv");
const ajv = new Ajv();

/**
 * Abre la la URL en tamaño de pantalla desktop  o mobile
 * @method {openWeb}
 */
Cypress.Commands.add("openWeb", () => {
  let tamPantalla;

  if (Cypress.env("type") === "mobile") {
    tamPantalla = Cypress.env("viewportmobile").device;
  } else {
    tamPantalla = Cypress.env("viewportdesktop").device;
  }

  cy.viewport(tamPantalla);
  cy.visit("/");
});

/**
 * Valida la estructura de datos del servicio
 * @method validarSchema
 * @param {String} schemaName - Nombre del archivo que está en la carpeta de fixtures/schemas
 * correspondiente al archivo que posee la estructura de datos de servicio que se desea validar
 * @param {String} servicioName - Nombre del archivo que está en la carpeta de fixtures/autogenerado
 */
Cypress.Commands.add("validarSchema", (schemaName, servicioName) => {
  cy.fixture(`schemas/${schemaName}.json`).then((schema) => {
    //hacer algo con el schema
    cy.fixture(`autogenerado/${servicioName}.json`).then((dataServicio) => {
      const validate = ajv.compile(schema);
      const valid = validate(dataServicio);
      if (!valid) {
        cy.log(JSON.stringify(validate.errors));
        throw new Error(
          `Error en el servicio ${JSON.stringify(validate.errors)}`
        );
      } else {
        cy.log(`El schema ${schemaName} se valido correctamente`);
      }
    });
  });
});

/**
 * Llama a un servicio y verifica la estructura de datos
 * @method callServiceCheck
 * @param {String} meth - Método: GET/POST/PUT, etc
 * @param {String} completeUrl - ENdpoint que se desea verificar
 * @param {String} schema - Nombre del Esquema del Servicio
 * @param {String} fileName - Nombre del archivo que se autogenerara con la respuesta del servicio
 */
Cypress.Commands.add(
  "callServiceCheck",
  (meth, completeUrl, schema, fileName) => {
    cy.request({
      method: meth,
      url: completeUrl,
    }).then((respuesta) => {
      cy.log(
        `Respuesta del servicio de ${fileName}: ${JSON.stringify(respuesta)}`
      );
      expect(respuesta.status).to.eq(200);
      cy.writeFile(
        `cypress/fixtures/autogenerado/${fileName}.json`,
        respuesta["body"]
      );
      cy.validarSchema(schema, fileName);
    });
  }
);
