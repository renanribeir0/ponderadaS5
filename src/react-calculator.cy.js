// Teste de operação de soma em uma calculadora React usando Cypress

// O bloco 'describe' agrupa os testes para a calculadora React
describe('React calculator example', () => {
    // O bloco 'it' define um caso de teste. Aqui, verificamos a operação de soma.
    it('Should validate addition operation', () => {
      // cy.visit() navega para a página da calculadora
      cy.visit('https://ahfarmer.github.io/calculator/');
      // Usamos cy.get() e .click() para simular cliques nos botões da calculadora
      cy.get('button').contains('7').click();
      cy.get('button').contains(/^\+$/).click();
      cy.get('button').contains('9').click();
      cy.get('button').contains('=').click();
      // cy.get().should() valida que o resultado da soma é 16
      cy.get('div[class="component-display"]>div').should('have.text','16');
    });
  });
  