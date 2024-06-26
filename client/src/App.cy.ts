/// <reference types="@testing-library/cypress" />

import App from './App.vue';

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App);

    cy.findByText('Hello, world!').should('exist');
  });
});
