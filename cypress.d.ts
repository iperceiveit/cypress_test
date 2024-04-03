declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to perform drag and drop using @4tw/cypress-drag-drop.
       * @param targetSelector The selector for the target element where the draggable item will be dropped.
       */
      drag(targetSelector: string): Chainable<Subject>;
      storeVariableFromAPIResponse(response: any): Chainable<Subject>;
      getStoredVariable(): Chainable<Subject>;
      draganddrop(dragSelector: string,dropSelector: string): Chainable<Subject>;
    }
  }
  