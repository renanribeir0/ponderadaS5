// Teste da lista de tarefas no React usando Cypress

// O bloco 'describe' agrupa os testes relacionados, neste caso para a lista de tarefas.
describe('React todo example', () => {
    // O bloco 'it' define um caso de teste. Aqui, testamos se é possível adicionar itens à lista de tarefas.
    it('Should add and verify todo list', () => {
      // cy.visit() navega para a página onde os testes serão realizados
      cy.visit('https://reactjs.org/');
      // cy.get() seleciona o campo de entrada pelo id '#new-todo' e .type() insere o texto no campo
      cy.get('#new-todo').type("My first todo item");
      // O método siblings().click() clica no botão que adiciona a tarefa
      cy.get('#new-todo').siblings('button').click();
      cy.get('#new-todo').type("My second todo item");
      cy.get('#new-todo').siblings('button').click();
      // cy.get().should() verifica se o texto no primeiro item da lista corresponde ao esperado
      cy.get('div[id = "todos-example"] >div >ul > li').eq(0).should('have.text', 'My first todo item');
      cy.get('div[id = "todos-example"] >div >ul > li').eq(1).should('have.text', 'My second todo item');
    });
  });
  